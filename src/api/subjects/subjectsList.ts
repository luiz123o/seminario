import { supabase } from "../../config/supabaseClient"


export const subjectList = async () => {
  const { data, error } = await supabase
    .from("subjects")
    .select("*")

  if (error) throw error

  return data
}
