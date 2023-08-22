import { useMutation } from "@tanstack/react-query";
import { memberUpdate } from "../../api/member/memberUpdate";

export const useMemberEditMutation = () => {
  const { data, isSuccess, isLoading, mutate, error } =
    useMutation(memberUpdate);

  return { data, isSuccess, isLoading, mutate, error };
};
