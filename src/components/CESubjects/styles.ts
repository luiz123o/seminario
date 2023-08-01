import { createStyles } from "@mantine/core";


export const useStylesCESubjects = createStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
  contentFlex: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "1rem",
  },
  inputFlex: {
    flex: 1
  }

}))