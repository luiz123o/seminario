import { supabase } from "../config/supabaseClient";
import { hasUser } from "../api/auth/hasUser";
import { useCreateMemberMutation } from "../services/member/memberMutation";

type PayloadReq = {
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
  password: string;
  password_confirmation: string;
  student?: boolean;
  teacher?: boolean;
  user_uuid?: string;
};

/**
 * Custom hook to handle user creation.
 * @returns An object containing the function to handle user creation and a boolean indicating if the request is loading.
 */
export const useCreateUser = () => {
  const { mutate, isLoading, isSuccess } = useCreateMemberMutation();

  /**
   * Function to handle user creation.
   * @param props An object containing the user's information.
   * @throws An error if the user is already registered or if the passwords don't match.
   */
  const handleCreateUser = async (props: PayloadReq) => {
    if (await hasUser(props.email)) throw new Error("Usuário já cadastrado");

    const { password, password_confirmation, ...rest } = props;

    console.log(password, password_confirmation);

    const { error: SignUpErro, data: DataCreateAccount } =
      await supabase.auth.signUp({
        email: props.email,
        password: password,
        options: {
          data: {
            name: props.name,
          },
          emailRedirectTo: `${window.location.origin}/reset-password}`,
        },
      });

    const data = { data: { user_uuid: DataCreateAccount.user?.id, ...rest } };

    mutate(data);

    if (SignUpErro) throw new Error(SignUpErro.message);
  };

  return { handleCreateUser, isLoading, isSuccess };
};
