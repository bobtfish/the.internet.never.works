import { ReactNode, useEffect, useState } from 'react'
import { useNavigation } from '@remix-run/react'
import {
    Box,
    LoadingOverlay,
    useComputedColorScheme
  } from '@mantine/core'

export type LoadingDelayProps = {
    delay?: number,
    children: ReactNode,
}

export function LoadingDelay({delay = 150, children}: LoadingDelayProps) {
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (navigation.state === 'loading') {
            const timeout = setTimeout(() => {
                setIsLoading(true);
            }, delay);
            return () => clearTimeout(timeout);
        } else {
            setIsLoading(false);
        }
    }, [navigation.state, delay]);
    // Note that use of useComputedColorScheme is ONLY for the loading overlay styling,
    // it cannot be used anywhere else as otherwise it will break hydration.
    // The only reason that it's okay in the loading overlay is that this is never displayed
    // during hydration, and so it's colour scheme doesn't matter.
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    return <Box pos='relative'>
    <LoadingOverlay
      visible={isLoading}
      zIndex={1000}
      overlayProps={{ radius: 'xl', blur: 2 }}
      loaderProps={{ color: computedColorScheme == 'light' ? 'black' : 'white', type: 'bars' }}
    />
    {children}
  </Box>
}