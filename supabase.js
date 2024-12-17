
const supabaseUrl = "https://ajfwgzghhobrowitlown.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZndnemdoaG9icm93aXRsb3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNTYwNjMsImV4cCI6MjA0OTkzMjA2M30.TeH2KwMu4jqHvDSFxGwma1fTbfDcJVqJ8WcwXi8j7dw";
const db = supabase.createClient(supabaseUrl, supabaseKey);

window.db = supabase;
