import {
  AppShell,
  RemoveScroll,
} from '@mantine/core'
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
  const headerHeight = 'calc(3.75rem * var(--mantine-scale))'
  const opened = true
  return (
    <AppShell
      header={{
        height: headerHeight,
        //offset: false
      }}
      navbar={{
        width: '8rem',
        breakpoint: 'sm',
        collapsed: { mobile: !opened }
      }}
      footer={{
        height: '3rem'
      }}
      padding='0px'
    >
      <AppShell.Header className={cx(classes.header, RemoveScroll.classNames.zeroRight)}>
         <Header />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main pt={headerHeight}>
        <LoadingDelay>
          {children}
        </LoadingDelay>
      </AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}
