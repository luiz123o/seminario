import { useMutation } from "@tanstack/react-query"
import { subjectCreate } from "../../api/subjects/subjectsCreate"




export const useCreateSubjectsMutation = () => {
  const { data, isSuccess, isLoading, mutate, error } = useMutation(subjectCreate)

  return { data, isSuccess, isLoading, mutate, error }
}