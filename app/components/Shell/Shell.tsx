import {
  Link,
} from "@remix-run/react";
import { AppShell, Container, RemoveScroll } from '@mantine/core';
import { HeaderControls } from './Header'
import classes from './Shell.module.css';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

import logo from "./logo.png";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const opened = true;
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: '8rem',
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      footer={{
        height: '3rem',
      }}
      padding="sm"
    >
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="xl" px="md" className={classes.header}>
          <Link to="/" className="mantine-focus-never">
            <img src={logo} alt="Homepage" style={{height: '50px'}} />
          </Link>
      
          <HeaderControls
            githubLink="https://github.com/bobtfish/the.internet.never.works/"
            linkedInLink="https://www.linkedin.com/in/tomasdoran/"
            visibleFrom="md"
          />

        </Container>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar /> 
      </AppShell.Navbar>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
