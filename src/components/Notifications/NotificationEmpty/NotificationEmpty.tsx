import { createStyles, ThemeIcon } from "@mantine/core"
import {
  DsBox,
  DsButtonPrimary,
  DsStackVertical,
  DsText
} from "@raisesistemas/ds"

import { BsSearch } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const useStyles = createStyles(() => ({
  text: {
    textAlign: "center"
  }
}))

type NotificationEmptyProps = {
  onNavigate: () => void
}

export const NotificationEmpty = ({ onNavigate }: NotificationEmptyProps) => {
  const { classes } = useStyles()
  const navigate = useNavigate()


  const handleNavigate = () => {
    navigate("/channels/posts")
    onNavigate()
  }

  return (
    <DsStackVertical align="center" spacing="xl">
      <DsBox />

      <ThemeIcon radius={60} size={60} variant="light">
        <BsSearch size={24} />
      </ThemeIcon>

      <DsStackVertical spacing="xs">
        <DsText variant="body-1" weight="semi-bold" className={classes.text}>
          {'teste noti'}
        </DsText>
        <DsText
          variant="body-2"
          weight="regular"
          color="dimmed"
          className={classes.text}
        >
          {'teste noti comuni'}
        </DsText>
      </DsStackVertical>
      <DsButtonPrimary onClick={handleNavigate}>
        {'ver tyeste6'}
      </DsButtonPrimary>
    </DsStackVertical>
  )
}
