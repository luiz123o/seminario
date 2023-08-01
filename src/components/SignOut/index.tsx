import { STORAGE_KEYS } from "../../constants/storage"
import { queryClient } from "../../config/react-query"
import { supabase } from "../../config/supabaseClient"

export function signOut() {
  localStorage.removeItem(STORAGE_KEYS.USER_ID) 
  queryClient.removeQueries()
  return supabase.auth.signOut()
}
