import { supabase } from "../../config/supabaseClient";
export type JoinPayload = {
  data: {
    id: number;
    name: string;
    document: string;
    email: string;
    street: string;
    number_home: number;
    city: string;
    state: string;
    avatar: string;
    phone?: string;
  };
};

export async function memberCreate(payload: JoinPayload) {
  const record = {
    ...payload.data,
  };

  const { data, error } = await supabase.from("members").update(record);

  return { data, error };
}
