import { useQuery } from "@tanstack/react-query";
import { queries } from "../services/query-key-factory";

export const useMembersQuery = () => {
  const { data, ...rest } = useQuery({
    ...queries.members.list()
  });

  return {
    data: data || [],
    ...rest,
  };
};

export const useMemberByIdQuery = (id: number) => {
  const { data, ...rest } = useQuery({
    ...queries.members.memberById(id)
  });

  return {
    data: data,
    ...rest,
  };
}
