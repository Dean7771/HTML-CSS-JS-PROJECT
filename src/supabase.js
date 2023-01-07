import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cfpdccpjjqvemxntynlg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmcGRjY3BqanF2ZW14bnR5bmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2NzEzODgsImV4cCI6MTk4ODI0NzM4OH0.3RlGOKRyKNlyqNSwh5-QVgJ8VDDySuOcgb2MAT8TXkM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
