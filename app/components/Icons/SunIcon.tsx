import { BaseIcon } from './BaseIcon'
import { IconProps } from './types'

export function SunIcon (props: IconProps) {
  return (
    <BaseIcon
      viewBox='0 0 24 24'
      fill='none'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      {...props}
    >
      <path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
      <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
    </BaseIcon>
  )
}
