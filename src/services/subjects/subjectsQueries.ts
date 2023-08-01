import { createQueryKeys } from "@lukemorales/query-key-factory";
import { subjectList } from "../../api/subjects/subjectsList";

export const subjectsQueries = createQueryKeys("subjects", {
  list: () => ({
    queryKey: ["subjects", "list"],
    queryFn: subjectList,
  }),
});
