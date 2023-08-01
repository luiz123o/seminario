import { Center, Loader } from "@mantine/core"

export function Fallback() {
  return (
    <Center mih="100vh">
      <Loader color="violet" variant="bars" />
    </Center>
  )
}
