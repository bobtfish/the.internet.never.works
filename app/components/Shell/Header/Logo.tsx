import { Link } from '@remix-run/react'
import { Box } from '@mantine/core'

import logo from '../logo.png'

export function Logo () {
  return (
    <Box component='span' pl='1rem'>
      <Link to='/' className='mantine-focus-never'>
        <img src={logo} alt='Homepage' style={{ height: '50px' }} />
      </Link>
    </Box>
  )
}
