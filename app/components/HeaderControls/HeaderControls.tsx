import { BoxProps, Group, Tooltip } from '@mantine/core';
import { ColorSchemeControl } from './ColorSchemeControl';
import { GithubControl } from './GithubControl';

interface HeaderControlsProps extends BoxProps {
  githubLink: string;
  withGithub?: boolean;
  withColorScheme?: boolean;
}

export function HeaderControls({
  githubLink,
  withGithub = true,
  withColorScheme = true,
  ...others
}: HeaderControlsProps) {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group gap="xs" {...others}>
        {withGithub && <GithubControl link={githubLink!} />}
        {withColorScheme && <ColorSchemeControl />}
      </Group>
    </Tooltip.Group>
  );
}
