import { SunIcon, MoonIcon } from '~/components'
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
        tooltip={'Dark mode'}
        aria-label='Toggle color scheme'
      >
        <MoonIcon className={classes.icon} />
      </HeaderControl>
      <HeaderControl
        lightHidden
        onClick={() => setColorScheme('light')}
        tooltip={'Light mode'}
        aria-label='Toggle color scheme'
      >
        <SunIcon className={classes.icon} />
      </HeaderControl>
    </>
  )
}
