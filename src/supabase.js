import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://objxempyixplaanlnzbp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ianhlbXB5aXhwbGFhbmxuemJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNTY1NjEsImV4cCI6MjAxMDczMjU2MX0.Sowj1t7vGhbH91VQGdIkfhZSXZli1SExuFm5om6MWjI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
