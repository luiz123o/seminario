import { supabase } from "../../config/supabaseClient";

export const hasUser = async (email: string) => {
  const { count } = await supabase
    .from("members")
    .select("email", { count: "exact", head: true })
    .eq("email", email);

  const existsEmail = count ? count > 0 : false;

  return existsEmail
};
