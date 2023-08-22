import { supabase } from "../../config/supabaseClient";
export type JoinPayload = {
  data: {
    id: number;
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
  };
};

export async function memberUpdate(payload: JoinPayload) {
  const record = {
    ...payload.data,
  };

  const { data, error } = await supabase.from("members").update(record);

  return { data, error };
}
