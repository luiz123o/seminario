import { useMutation } from "@tanstack/react-query"
import { memberCreate } from "../../api/member/memberCreate"
import { toast } from "@raisesistemas/ds"




export const useCreateMemberMutation = () => {
  const { data, isSuccess, isLoading, mutate, error } = useMutation(memberCreate, {
    onSuccess: () => {
      toast.success({
        title: "Sucesso",
        message: "Usuário cadastrado com sucesso",
        variant: "solid",
        id: String(Math.random()),
      })
    }
  })

  return { data, isSuccess, isLoading, mutate, error }
}

