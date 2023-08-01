import { supabase } from "../../config/supabaseClient";
export type JoinPayload = {
  data: {
    id: number;
    subject_id: number;
    teacher_id: number;
    start_date: Date;
    end_date: Date;
    class_name: string;
  };
};

export async function classUpdate(payload: JoinPayload) {
  const record = {
    ...payload.data
  };
 
  const { data, error } = await supabase.from("class").update(record);

  return { data, error };
}
