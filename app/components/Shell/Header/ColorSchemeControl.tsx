import { IconMoon, IconSun } from '@tabler/icons-react'
import { useMantineColorScheme } from '@mantine/core'
import { HeaderControl } from './HeaderControl'
import classes from './ColorSchemeControl.module.css'

export function ColorSchemeControl () {
  const { setColorScheme } = useMantineColorScheme()

  return (
    <>
      <HeaderControl
        darkHidden
        onClick={() => setColorScheme('dark')}
        tooltip={'Light mode'}
        aria-label='Toggle color scheme'
      >
        <IconMoon className={classes.icon} stroke={1.5} />
      </HeaderControl>
      <HeaderControl
        lightHidden
        onClick={() => setColorScheme('light')}
        tooltip={'Dark mode'}
        aria-label='Toggle color scheme'
      >
        <IconSun className={classes.icon} stroke={1.5} />
      </HeaderControl>
    </>
  )
}
