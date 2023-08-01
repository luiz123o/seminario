import { useEffect } from "react"
import { useMatch, useNavigate } from "react-router-dom"
import { NavLink, NavLinkProps } from "@mantine/core"

type DSNavLinkProps = Omit<NavLinkProps, "isActive" | "label"> & {
  title: string
  to: string
  onActiveChange?: (title: string, icon: string) => void
  onClick?: () => void
}

export const DsNavLink = (props: DSNavLinkProps) => {
  const { title, icon, to, onClick , rightSection, onActiveChange } = props
  const match = useMatch(to)
  const navigate = useNavigate()
  const isActive = Boolean(match)

  const handleNavigate = () => {
    navigate(to)
    onClick?.()
  }

  useEffect(() => {
    if (isActive && onActiveChange) {
      onActiveChange(title, icon as string)
    }
  }, [title, icon, onActiveChange])

  return (
    <NavLink
      active={isActive}
      label={title}
      icon={icon}
      onClick={handleNavigate}
      rightSection={rightSection}
    />
  )
}
