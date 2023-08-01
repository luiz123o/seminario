import { supabase } from "../../config/supabaseClient";
export type JoinPayload = {
  data: {
    subject_name: string;
    subject_workload: number;
  };
};

export async function subjectCreate(payload: JoinPayload) {
  const record = {
    ...payload.data,
    created_at: new Date().toISOString(),
  };
  
  const { data, error } = await supabase.from("subjects").insert(record);

  return { data, error };
}
