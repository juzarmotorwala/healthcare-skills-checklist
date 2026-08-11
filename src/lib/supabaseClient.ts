import { createClient } from "@supabase/supabase-js";

// These are publishable/anon-level values — safe to ship in frontend code.
// Access control is enforced by Row Level Security policies in Supabase, not by hiding these.
const SUPABASE_URL = "https://tdlehvfvtxudoxyldlge.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_AMl9OU-tb46N5Rc0ca4Cfw_uNpPrMCB";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export const SUBMIT_CHECKLIST_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/submit-checklist`;
export const SUPABASE_PUBLISHABLE_KEY_FOR_FUNCTIONS = SUPABASE_PUBLISHABLE_KEY;
