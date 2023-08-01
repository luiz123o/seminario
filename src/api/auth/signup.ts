import { supabase } from "../../config/supabaseClient"
import { hasUser } from "./hasUser"

export type SignupPayload = {
  name: string
  email: string
  password: string
  phone?: string
  repeat_password: string
}

export async function signUp(payload: SignupPayload) {
  if (await hasUser(payload.email)) {
    throw new Error("User already exists")
  }

  const { data, error } = await supabase.auth.signUp({
    email: payload.email,
    password: payload.password,
    options: {
      data: {
        name: payload.name,
        phone: payload.phone
      },
      emailRedirectTo: `${window.location.origin}/sign-in`
    }
  })

  if (error) throw error

  return data
}
