import { Logo } from './Logo'
import { HeaderControls } from './HeaderControls'

export function Header () {
  return (
    <>
      <Logo />

      <HeaderControls
        githubLink='https://github.com/bobtfish/the.internet.never.works/'
        linkedInLink='https://www.linkedin.com/in/tomasdoran/'
        // FIXME
        visibleFrom='md'
      />
    </>
  )
}
