import { GithubIcon } from '~/components';
import { HeaderControl } from './HeaderControl';

interface GithubControlProps {
  link: string;
}

export function GithubControl({ link }: GithubControlProps) {
  return (
    <HeaderControl tooltip="Source code" component="a" href={link}>
      <GithubIcon size={44} />
    </HeaderControl>
  );
}
