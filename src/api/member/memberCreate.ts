import { supabase } from "../../config/supabaseClient";
export type JoinPayload = {
  data: {
    name: string;
    document: string;
    email: string;
    street: string;
    number_home: number;
    complement: string;
    birth: Date;
    city: string;
    state: string;
    avatar: string;
    phone: string;
    student?: boolean;
    teacher?: boolean;
    user_uuid?: string;
  };
};

export async function memberCreate(payload: JoinPayload) {
  const record = {
    ...payload.data,
    created_at: new Date().toISOString(),
  };

  const { data, error } = await supabase.from("members").insert(record);

  return { data, error };
}
