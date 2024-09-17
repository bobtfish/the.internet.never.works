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
  const opened = true
  return (
    <>
    <div style={{backgroundColor: "black", width: '200px', height: '187px', position: 'absolute', zIndex: 2000}} >&nbsp;</div>
    <div style={{backgroundColor: "red", marginLeft: '200px', width: '400px', height: 'calc(var(--app-shell-header-offset) + calc(var(--mantine-h1-font-size) * var(--mantine-h1-line-height)) + 0.67em + var(--mantine-spacing-xs) + calc(var(--mantine-font-size-md) * var(--mantine-line-height-md)) + calc(1rem * var(--mantine-scale)) + 20px + 20px)', position: 'absolute', zIndex: 2000}} >&nbsp;</div>

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
      }}
    >
      <AppShell.Header>
         <Header />
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
    <div style={{position: 'absolute', backgroundColor: "purple", marginLeft: '200px', width: '400px', height: 'calc(60px + calc(var(--mantine-font-size-md) * var(--mantine-line-height-md)) + calc(0.3125rem * var(--mantine-scale)) + calc(0.625rem * var(--mantine-scale)) + var(--mantine-spacing-sm))', zIndex: 3000, bottom: 0}}>&nbsp;</div>
    </>
  )
}
