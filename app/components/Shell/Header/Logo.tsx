import { Link } from '@remix-run/react'
import { Box } from '@mantine/core'
import classes from './Header.module.css'

import logo from '../logo.png'

export function Logo () {
  return (
    <Box component='span' className={classes.logo}>
      <Link to='/' className='mantine-focus-never'>
        <img src={logo} alt='Homepage' style={{ height: '50px' }} />
      </Link>
    </Box>
  )
}
