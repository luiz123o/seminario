
import { supabase } from "../../config/supabaseClient"


export type SigninPayload = {
  email: string
  password: string
}

export async function signin(payload: SigninPayload) {
  if ("password" in payload) {
    const { error } = await supabase.auth.signInWithPassword(payload)
    
    if (error) throw error
  } 
}

