import { createQueryKeys } from "@lukemorales/query-key-factory";
import { classList } from "../../api/class/classList";


export const classQueries = createQueryKeys('class', {
  list: () => ({
    queryKey: ['class', 'list'],
    queryFn: classList,    
  })
})