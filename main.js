// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient("https://kswscmjoqonxyqabktgv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtzd3NjbWpvcW9ueHlxYWJrdGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjM1OTEsImV4cCI6MjAwOTM5OTU5MX0.ILlRzBX-qHqmGfVcm73fU_PbsmGFQur9pOkETXzSAHE")

// Make a request
const { data: vildmad, error } = await supabase.from('vildmad').select('*')

console.log(vildmad);