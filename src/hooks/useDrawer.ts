import { useDisclosure } from "@mantine/hooks"

export const useDrawer = () => {
  const [opened, { open: onOpen, close: onClose }] = useDisclosure()

  const getDrawerProps = () => ({
    opened,
    onClose
  })

  return {
    opened,
    onOpen,
    onClose,
    getDrawerProps
  }
}
