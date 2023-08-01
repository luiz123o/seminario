import { supabase } from "../../config/supabaseClient";

export const studentList = async () => {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .is("student", true);

  if (error) throw error;

  return data;
};
