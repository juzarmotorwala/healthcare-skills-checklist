// Post-build step: generates a real static index.html per checklist route
// (with per-route <title>/<meta description>/OG tags baked into the HTML)
// plus a sitemap.xml. This exists because link-unfurl bots (LinkedIn, Slack,
// Facebook) and most search crawlers fetch raw HTML and do NOT execute
// client-side JS — so React-Helmet-style client injection would leave them
// seeing only the generic homepage meta tags. Baking real HTML per route at
// build time fixes that without a full SSR rewrite.
import { build } from "esbuild";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const siteUrl = "https://healthcareskillschecklist.com";

// Bundle just the checklist data module (no React/DOM deps) so we can read
// slug/title/shortTitle for every checklist without booting the whole app.
const bundled = await build({
  entryPoints: [path.join(root, "src/data/checklistData.ts")],
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
});
const tempModulePath = path.join(root, "scripts/.checklist-data.mjs");
await writeFile(tempModulePath, bundled.outputFiles[0].text);
const { checklists } = await import(`${tempModulePath}?t=${Date.now()}`);

const template = await readFile(path.join(distDir, "index.html"), "utf-8");

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function pageFor({ title, description, url }) {
  let html = template;
  html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`,
  );
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
  );
  html = html.replace(
    "</head>",
    `  <link rel="canonical" href="${url}" />\n  <meta property="og:url" content="${url}" />\n</head>`,
  );
  return html;
}

const urls = [{ loc: `${siteUrl}/`, priority: "1.0" }];

// Keep the homepage's meta description in sync with the live specialty count
// shown in the hero (see src/pages/Index.tsx's `displayedTotal`, which uses
// the same floor-to-nearest-5 math) so the two never drift out of sync as
// checklists are added.
const displayedTotal = Math.floor(checklists.length / 5) * 5;
const homeDescription = `Helping healthcare professionals self-assess their skills across ${displayedTotal}+ clinical specialties. Rate your experience and download a clean PDF for free.`;
let homeHtml = template;
homeHtml = homeHtml.replace(
  /<meta name="description" content=".*?" \/>/,
  `<meta name="description" content="${escapeHtml(homeDescription)}" />`,
);
homeHtml = homeHtml.replace(
  /<meta property="og:description" content=".*?" \/>/,
  `<meta property="og:description" content="${escapeHtml(homeDescription)}" />`,
);
await writeFile(path.join(distDir, "index.html"), homeHtml);

for (const c of checklists) {
  if (!c.categories?.length) continue; // skip "coming soon" checklists — nothing to index yet
  const dir = path.join(distDir, "checklist", c.slug);
  await mkdir(dir, { recursive: true });
  const html = pageFor({
    title: `${c.title} | Healthcare Skills Checklist`,
    description: `Free self-assessment checklist for ${c.shortTitle}. Rate your skills, download a PDF, and use it wherever you apply.`,
    url: `${siteUrl}/checklist/${c.slug}`,
  });
  await writeFile(path.join(dir, "index.html"), html);
  urls.push({ loc: `${siteUrl}/checklist/${c.slug}`, priority: "0.8" });
}

for (const [route, title, description] of [
  ["privacy", "Privacy Policy | Healthcare Skills Checklist", "Privacy policy for Healthcare Skills Checklist."],
  ["terms", "Terms of Use | Healthcare Skills Checklist", "Terms of use for Healthcare Skills Checklist."],
]) {
  const dir = path.join(distDir, route);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), pageFor({ title, description, url: `${siteUrl}/${route}` }));
  urls.push({ loc: `${siteUrl}/${route}`, priority: "0.3" });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((u) => `  <url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`)
  .join("\n")}\n</urlset>\n`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);

console.log(`Prerendered ${urls.length - 1} routes + sitemap.xml (${checklists.filter(c => c.categories?.length).length} checklists with content)`);
