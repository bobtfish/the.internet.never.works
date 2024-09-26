import {
  AppShell,
  RemoveScroll,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import cx from 'clsx';
import { LoadingDelay } from '~/components'
import { Header } from './Header'
import classes from './Shell.module.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface ShellProps {
  children: React.ReactNode
}

export function Shell ({ children }: ShellProps) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
    <AppShell
      header={{
        height: '60px', // Note this isn't actually a fixed size, it's recalculated in terms of page scale
      }}
      navbar={{
        width: '8rem',
        breakpoint: 'sm',
        // FIXME
        collapsed: { mobile: !opened }
      }}
      footer={{
        height: '3rem',
      }}
      padding='0px'
      classNames={{
        root: classes.root,
        header: cx(classes.header, RemoveScroll.classNames.zeroRight),
        main: classes.main,
        footer: classes.footer,
        navbar: classes.navbar,
      }}
    >

      <AppShell.Header>
         <Header navOpen={opened} toggleNav={toggle} />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <LoadingDelay>
          {children}
        </LoadingDelay>
      </AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
    </>
  )
}
