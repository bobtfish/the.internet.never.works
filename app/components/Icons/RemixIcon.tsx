import { BaseIcon } from './BaseIcon'
import { IconProps } from './types'

export function RemixIconDark (props: IconProps) {
  return (
    <BaseIcon viewBox='0 0 412 474' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M393.946 364.768C398.201 419.418 398.201 445.036 398.201 473H271.756C271.756 466.909 271.865 461.337 271.975 455.687C272.317 438.123 272.674 419.807 269.828 382.819C266.067 328.667 242.748 316.634 199.871 316.634H161.883H1V218.109H205.889C260.049 218.109 287.13 201.633 287.13 158.011C287.13 119.654 260.049 96.4098 205.889 96.4098H1V0H228.456C351.069 0 412 57.9117 412 150.42C412 219.613 369.123 264.739 311.201 272.26C360.096 282.037 388.681 309.865 393.946 364.768Z'
        fill='white'
      />
      <path
        d='M1 473V399.553H134.697C157.029 399.553 161.878 416.116 161.878 425.994V473H1Z'
        fill='white'
      />
      <path
        d='M1 399.053H0.5V399.553V473V473.5H1H161.878H162.378V473V425.994C162.378 420.988 161.152 414.26 157.063 408.77C152.955 403.255 146.004 399.053 134.697 399.053H1Z'
        stroke='white'
        strokeOpacity='0.8'
      />
    </BaseIcon>
  )
}

export function RemixIconLight ({ size = 16, ...others }: IconProps) {
  return (
    <BaseIcon viewBox='0 0 411 473' fill='currentColor' size={size} {...others}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M392.946 364.768C397.201 419.418 397.201 445.036 397.201 473H270.756C270.756 466.909 270.865 461.337 270.975 455.687C271.317 438.123 271.674 419.807 268.828 382.819C265.067 328.667 241.748 316.634 198.871 316.634H160.883H0V218.109H204.889C259.049 218.109 286.13 201.633 286.13 158.011C286.13 119.654 259.049 96.4098 204.889 96.4098H0V0H227.456C350.069 0 411 57.9117 411 150.42C411 219.613 368.123 264.739 310.201 272.26C359.096 282.037 387.681 309.865 392.946 364.768Z'
        fill='#121212'
      />
      <path
        d='M0 473V399.553H133.697C156.029 399.553 160.878 416.116 160.878 425.994V473H0Z'
        fill='#121212'
      />
    </BaseIcon>
  )
}

export function RemixIcon (props: IconProps) {
  return (
    <>
      <RemixIconLight lightHidden {...props} />
      <RemixIconDark darkHidden {...props} />
    </>
  )
}
ß