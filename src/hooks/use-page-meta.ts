import { useEffect } from "react";

const DEFAULT_TITLE = "Healthcare Skills Checklist";
const DEFAULT_DESCRIPTION =
  "Self-assessment checklists for healthcare professionals. Rate your skills, download a PDF, and use it wherever you apply.";

function setMetaContent(selector: string, content: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute("content", content);
}

/**
 * Keeps the browser tab title and meta/OG description in sync with the page
 * actually being viewed. The prerendered per-route HTML (see
 * scripts/build-seo.mjs) already bakes the correct tags in for crawlers and
 * link-unfurl bots hitting a URL directly — this hook covers the other case:
 * a visitor who navigates between pages client-side (React Router) without a
 * full page reload, where the tab title would otherwise stay stuck on
 * whichever page first loaded.
 */
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    const resolvedTitle = title ? `${title} | Healthcare Skills Checklist` : DEFAULT_TITLE;
    const resolvedDescription = description ?? DEFAULT_DESCRIPTION;

    document.title = resolvedTitle;
    setMetaContent('meta[name="description"]', resolvedDescription);
    setMetaContent('meta[property="og:title"]', resolvedTitle);
    setMetaContent('meta[property="og:description"]', resolvedDescription);
  }, [title, description]);
}
