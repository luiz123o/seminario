
import { supabase } from "../../config/supabaseClient"

export const memberById = (user_uuid: string) => {
  if (!user_uuid) throw new Error("user_uuid is required")
  return supabase
    .from("Users")
    .select("*")
    .match({
      user_uuid,     
    })
    .single()
}
