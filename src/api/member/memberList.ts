import { supabase } from "../../config/supabaseClient"


export const memberList = async () => {
  const { data, error } = await supabase
    .from("members")
    .select("*")

  if (error) throw error

  return data
}
