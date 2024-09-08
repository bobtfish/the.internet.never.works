import { GithubIcon } from '~/components/Icons';
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
