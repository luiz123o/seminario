import { supabase } from "../../config/supabaseClient";

export const teacherList = async () => {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .is("teacher", true);

  if (error) throw error;

  return data;
};
