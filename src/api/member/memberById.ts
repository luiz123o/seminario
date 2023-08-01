import { supabase } from "../../config/supabaseClient";

export const memberById = (id: number) => {
  if (!id) throw new Error("id is required")
  console.log(id)
  return supabase
    .from("member")
    .select("*")
    .eq("id", id)
}
