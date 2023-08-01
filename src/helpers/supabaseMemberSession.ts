import { Session } from "@supabase/supabase-js"

import { supabaseUserToMemberData } from "./supabaseUserToMemberData"


export const supabaseSessionToMember = (session: Session) => {
  
  return {    
    user_uuid: session.user.id,
    data: supabaseUserToMemberData(session.user)
  }
}
