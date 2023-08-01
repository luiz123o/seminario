import { supabase } from "../../config/supabaseClient";
export type JoinPayload = {
  data: {
    subject_id: number;
    teacher_id: number;
    start_date: Date;
    end_date: Date;
    class_name: string;
  };
};

export async function classCreate(payload: JoinPayload) {
  const record = {
    ...payload.data,
    created_at: new Date().toISOString(),
  };
 
  const { data, error } = await supabase.from("class_students").insert(record);

  return { data, error };
}
