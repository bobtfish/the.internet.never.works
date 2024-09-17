import { LinkedInIcon } from '~/components';
import { HeaderControl } from './HeaderControl';
import classes from './Header.module.css';

interface LinkedInControlProps {
  link: string;
}

export function LinkedInControl({ link }: LinkedInControlProps) {
  return (
    <HeaderControl tooltip="LinkedIn" component="a" href={link}>
      <LinkedInIcon className={classes.icon} />
    </HeaderControl>
  );
}
