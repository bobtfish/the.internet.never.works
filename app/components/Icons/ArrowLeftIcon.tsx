import { BaseIcon } from './BaseIcon'
import { IconProps } from './types'

export function ArrowLeftIcon ({size, ...props}: IconProps) {
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
      <path d='M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3z' />
      <path d='M21 15v-6' />
      <path d='M18 15v-6' />
    </BaseIcon>
  )
}
