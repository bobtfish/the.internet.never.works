import { ReactNode } from 'react'
import { Box, rem } from '@mantine/core'
import { IconProps } from './types'

export function WrapHref ({
  href,
  children
}: {
  href?: string
  children: ReactNode
}) {
  if (href) {
    return (
      <a href={href} target='_blank' rel='noreferrer'>
        {children}
      </a>
    )
  }
  return children
}

export function BaseIcon ({
  href,
  children,
  size,
  style,
  fill = 'none',
  viewBox,
  ...others
}: {
  href?: string
  fill?: string
  viewBox: string
  children: ReactNode
} & IconProps) {
  return (
    <WrapHref href={href}>
      <Box
        component='svg'
        xmlns='http://www.w3.org/2000/svg'
        viewBox={viewBox}
        style={[{ width: rem(size), height: rem(size) }, style]}
        fill={fill}
        {...others}
      >
        {children}
      </Box>
    </WrapHref>
  )
}
