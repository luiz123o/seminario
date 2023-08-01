import { createStyles } from "@mantine/core"
import { DsBox } from "@raisesistemas/ds"

type NotificationOpenedIndicatorProps = {
  opened: boolean
}

const useStyles = createStyles(({ colors }) => ({
  container: {
    width: 8,
    height: 8,
    borderRadius: "100%",
    backgroundColor: colors.green[7]
  }
}))

export const NotificationOpenedIndicator = (
  props: NotificationOpenedIndicatorProps
) => {
  const { classes } = useStyles()
  if (props.opened) return null

  return <DsBox className={classes.container} />
}
