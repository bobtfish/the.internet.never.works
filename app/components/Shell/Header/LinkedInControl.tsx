import { LinkedInIcon } from '~/components';
import { HeaderControl } from './HeaderControl';

interface LinkedInControlProps {
  link: string;
}

export function LinkedInControl({ link }: LinkedInControlProps) {
  return (
    <HeaderControl tooltip="LinkedIn" component="a" href={link}>
      <LinkedInIcon size={44} />
    </HeaderControl>
  );
}
