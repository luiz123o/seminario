import { supabase } from "../../config/supabaseClient";
export type JoinPayload = {
  data: {
    id: number;
    class_id: string;
    members_id: string;
    absences: number;
    average_grade: number;
  };
};

export async function gradeUpdate(payload: JoinPayload) {
  const record = {
    ...payload.data
  };
 
  const { data, error } = await supabase.from("class_students").update(record);

  return { data, error };
}
