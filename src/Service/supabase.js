import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hyhgcdijziponqatqzaj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aGdjZGlqemlwb25xYXRxemFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzNzM3NDMsImV4cCI6MjAzNjk0OTc0M30.Lz5-ZgXfKVfyrX1Uganjd-wx3qDI4veGhoQynhiwyWo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
