import {
  Link,
} from "@remix-run/react";
import { AppShell, Container, RemoveScroll, Group } from '@mantine/core';
import { ColorSchemeControl, HeaderControls, SearchMobileControl } from '@mantinex/mantine-header';
import { meta } from '@mantinex/mantine-meta';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="xl" px="md" className={classes.inner}>
          <Link to="/" className="mantine-focus-auto">
            LOGO
          </Link>

          <HeaderControls
            visibleFrom="sm"
            onSearch={() => {alert('lol')}}
            githubLink={meta.gitHubLinks.mantineUi}
            withDirectionToggle={false}
            discordLink={meta.discordLink}
          />

          <Group hiddenFrom="sm">
            <SearchMobileControl onSearch={() => {alert('lol')}} />
            <ColorSchemeControl />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
