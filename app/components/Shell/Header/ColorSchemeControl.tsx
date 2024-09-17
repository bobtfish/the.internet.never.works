import { SunIcon, MoonIcon } from '~/components'
import { useMantineColorScheme } from '@mantine/core'
import { HeaderControl } from './HeaderControl'
import classes from './Header.module.css'

export function ColorSchemeControl () {
  const { setColorScheme } = useMantineColorScheme()

  return (
    <>
      <HeaderControl
        darkHidden
        onClick={() => setColorScheme('dark')}
        tooltip={'Dark mode'}
        aria-label='Toggle color scheme'
        className={classes.hideXSmall}
      >
        <MoonIcon size="44px" />
      </HeaderControl>
      <HeaderControl
        lightHidden
        onClick={() => setColorScheme('light')}
        tooltip={'Light mode'}
        aria-label='Toggle color scheme'
        className={classes.hideXSmall}
      >
        <SunIcon size="44px"/>
      </HeaderControl>
    </>
  )
}
