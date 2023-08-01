import { supabase } from "../../config/supabaseClient"


export const classList = async () => {
  const { data, error } = await supabase
  .from("class").select("*, members(*), subjects(*)")
  if (error) throw error
console.log("teste9",data)
  return data
}
