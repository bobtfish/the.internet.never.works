import { useEffect, useState } from 'react'
import { useNavigation } from '@remix-run/react'

export function useIsLoading(delay: number) {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (navigation.state === 'loading') {
      const timeout = setTimeout(() => {
        setIsLoading(true)
      }, delay)
      return () => clearTimeout(timeout)
    } else {
      setIsLoading(false)
    }
  }, [navigation.state, delay])
  return isLoading
}