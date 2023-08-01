import { createQueryKeys } from "@lukemorales/query-key-factory";
import { memberList } from "../../api/member/memberList";
import { memberById } from "../../api/member/memberById";


export const memberQueries = createQueryKeys('members', {
  list: () => ({
    queryKey: ['members', 'list'],
    queryFn: memberList,    
  }),
  memberById: (id: number) => ({
    queryKey: ['members', 'memberById', id],
    queryFn: memberById(id),
  })
})