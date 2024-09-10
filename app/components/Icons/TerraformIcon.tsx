import { BaseIcon } from './BaseIcon'
import { IconProps } from './types'

export function TerraformIcon (props: IconProps) {
  return (
    <BaseIcon
      viewBox='20 5 40 45'
      fill='none'
      {...props}
    >
      <path
        d='M38.06 26.151v11.473L48 31.891V20.406l-9.94 5.745z'
        fill='#4040B2'
      />
      <path
        d='m27.03 20.406 9.94 5.745v11.473l-9.94-5.74V20.407zM16 14v11.479l9.94 5.74v-11.48L16 14zm11.03 30.624 9.94 5.74v-11.48l-9.94-5.739v11.48z'
        fill='#5C4EE5'
      />
    </BaseIcon>
  )
}
