import { supabase } from "../../config/supabaseClient"


export const gradeList = async () => {
  const { data, error } = await supabase
    .from("class_students")
    .select("*")

  if (error) throw error

  return data
}
