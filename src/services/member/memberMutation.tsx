import { useMutation } from "@tanstack/react-query"
import { memberCreate } from "../../api/member/memberCreate"




export const useCreateMemberMutation = () => {
  const { data, isSuccess, isLoading, mutate, error } = useMutation(memberCreate)

  return { data, isSuccess, isLoading, mutate, error }
}