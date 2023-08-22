import { useMemberEditMutation } from "../services/member/memberEditMutation";

type PayloadReq = {
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
  user_uuid?: string;
};

/**
 * Custom hook to handle user creation.
 * @returns An object containing the function to handle user creation and a boolean indicating if the request is loading.
 */
export const useEditUser = () => {
  const { mutate, isLoading, isSuccess } = useMemberEditMutation();

  /**
   * Function to handle user creation.
   * @param props An object containing the user's information.
   * @throws An error if the user is already registered or if the passwords don't match.
   */
  const handleUpdateUser = async (props: PayloadReq) => {
    const data = { data: { ...props } };

    mutate(data);
  };

  return { handleUpdateUser, isLoading, isSuccess };
};
