import { BoxProps, Group, Tooltip } from '@mantine/core';
import { ColorSchemeControl } from './ColorSchemeControl';
import { GithubControl } from './GithubControl';
import { LinkedInControl } from './LinkedInControl';
import { PrintControl } from './PrintControl';

interface HeaderControlsProps extends BoxProps {
  githubLink: string;
  linkedInLink: string;
  withGithub?: boolean;
  withLinkedIn?: boolean;
  withColorScheme?: boolean;
}

export function HeaderControls({
  githubLink,
  linkedInLink,
  withGithub = true,
  withLinkedIn = true,
  withColorScheme = true,
  ...others
}: HeaderControlsProps) {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group gap="xs" {...others}>
        {withGithub && <GithubControl link={githubLink!} />}
        {withLinkedIn && <LinkedInControl link={linkedInLink!} />}
        {withColorScheme && <ColorSchemeControl />}
        <PrintControl />
      </Group>
    </Tooltip.Group>
  );
}
