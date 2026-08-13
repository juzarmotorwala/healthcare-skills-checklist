import { createClient } from "@supabase/supabase-js";

// These are publishable/anon-level values — safe to ship in frontend code.
// Access control is enforced by Row Level Security policies in Supabase, not by hiding these.
const SUPABASE_URL = "https://lztnbzgyfbzamvrtrxmt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_t4_KvRWxgPstHR776eJ08w_DiQz8Sww";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export const SUBMIT_CHECKLIST_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/submit-checklist`;
export const SUPABASE_PUBLISHABLE_KEY_FOR_FUNCTIONS = SUPABASE_PUBLISHABLE_KEY;
