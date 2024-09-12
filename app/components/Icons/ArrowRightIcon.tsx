import { BaseIcon } from './BaseIcon'
import { IconProps } from './types'

export function ArrowRightIcon ({size, ...props}: IconProps) {
  size ||= 48;
  return (
    <BaseIcon
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      size={size}
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z' />
      <path d='M3 9v6' />
      <path d='M6 9v6' />
    </BaseIcon>
  )
}
