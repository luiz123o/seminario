import { Session } from "@supabase/supabase-js"

export const supabaseUserToMemberData = (user: Session["user"]) => {
  return {
    avatar: user.user_metadata?.avatar_url || "",
    name: user.user_metadata?.name || "",
    email: user.email || "",
    created_at: new Date().toISOString()
  }
}
