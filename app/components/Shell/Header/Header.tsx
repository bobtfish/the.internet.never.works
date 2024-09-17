import { Burger, Group } from '@mantine/core'
import { Logo } from './Logo'
import { HeaderControls } from './HeaderControls'

type HeaderProps = {
  navOpen: boolean
  toggleNav: () => void
}
export function Header ({navOpen, toggleNav}: HeaderProps) {
  return (
    <>
    <Group gap="xs">
       <Burger
          opened={navOpen}
          onClick={toggleNav}
          hiddenFrom="sm"
          size="sm"
          pl="sm"
      />
      <Logo />
      </Group>

      <HeaderControls
        githubLink='https://github.com/bobtfish/the.internet.never.works/'
        linkedInLink='https://www.linkedin.com/in/tomasdoran/'
      />
    </>
  )
}
