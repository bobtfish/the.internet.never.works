import {
  Link,
} from "@remix-run/react";
import { AppShell, Container, RemoveScroll } from '@mantine/core';
import { HeaderControls } from '~/components/HeaderControls'
import classes from './Shell.module.css';
import {Navbar} from "~/components/Navbar";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const opened = true;
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="xl" px="md" className={classes.inner}>
          <Link to="/" className="mantine-focus-auto">
            LOGO
          </Link>
      
          <HeaderControls
            githubLink="https://github.com/bobtfish/the.internet.never.works/"
            linkedInLink="https://www.linkedin.com/in/tomasdoran/"
            visibleFrom="md"
          />

        </Container>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar /> 
      </AppShell.Navbar>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
