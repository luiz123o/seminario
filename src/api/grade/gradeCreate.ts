import { supabase } from "../../config/supabaseClient";
export type JoinPayload = {
  data: {
    class_id: string;
    members_id: string;
    absences: number;
    average_grade: number;
  };
};

export async function gradeCreate(payload: JoinPayload) {
  const record = {
    ...payload.data,
    created_at: new Date().toISOString(),
  };
 
  const { data, error } = await supabase.from("class_students").insert(record);

  return { data, error };
}
