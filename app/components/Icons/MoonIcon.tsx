import { BaseIcon } from './BaseIcon'
import { IconProps } from './types'

export function MoonIcon (props: IconProps) {
  return (
    <BaseIcon
      viewBox='0 0 24 24'
      fill='none'
      stroke='black'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      {...props}
    >ß
      <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />
    </BaseIcon>
  )
}
