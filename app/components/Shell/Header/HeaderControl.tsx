import cx from 'clsx';
import { BoxProps, createPolymorphicComponent, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './Header.module.css';

export interface HeaderControlProps extends BoxProps {
  tooltip: string;
  'aria-label'?: string;
  children: React.ReactNode;
  lightHidden?: boolean;
  darkHidden?: boolean;
}

function _HeaderControl({
  tooltip,
  className,
  lightHidden,
  darkHidden,
  'aria-label': label,
  ...others
}: HeaderControlProps) {
  return (
    <Tooltip inline lightHidden={lightHidden} darkHidden={darkHidden} label={tooltip}>
      <UnstyledButton
        lightHidden={lightHidden} darkHidden={darkHidden}
        className={cx(classes.control, className)}
        aria-label={label || tooltip}
        {...others}
      />
    </Tooltip>
  );
}

export const HeaderControl = createPolymorphicComponent<'button', HeaderControlProps>(
  _HeaderControl
);
