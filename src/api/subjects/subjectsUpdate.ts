import { supabase } from "../../config/supabaseClient";
export type JoinPayload = {
  data: {
    id: number;
    subject_name: string;
    subject_workload: number;
  };
};

export async function subjectCreate(payload: JoinPayload) {
  const record = {
    ...payload.data,
  };

  const { data, error } = await supabase.from("subjects").update(record);

  return { data, error };
}
