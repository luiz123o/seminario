import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "../config/supabaseClient";
import { useMutation } from "@tanstack/react-query";
import { signin } from "../api/auth/signIn";
import { useNavigateTo } from "../helpers/navigateTo";

export const useAuth = () => {
  const context = useContext(AuthContext);

  const [user, setUser] = useState<User | null>()
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedSession, setLoadedSession] = useState(false)


  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
      setLoadedSession(true)
    })()

    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        setSession(session)
      }

      if (event === "SIGNED_OUT") setUser(null)
    })

    return () => data.subscription.unsubscribe()
  }, [])

 

  useEffect(() => {
    (async () => {
      if (loadedSession) {
        await handleSignIn(session)
        setIsLoading(false)
      }
    })()
  }, [session, loadedSession])

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

async function handleSignIn(session: Session | null) {
  throw new Error("Function not implemented.");
}
