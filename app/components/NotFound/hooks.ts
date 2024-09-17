import { useHydrated } from 'remix-utils/use-hydrated'

export function useNotFoundRootStyleVariables(): {[key: `--${string}`] : string} {
    const isHydrated = useHydrated()
      const othercolor = () => Math.floor((Math.random() * 16)).toString(16)
      const mainColor = Math.floor((Math.random() * 10)+5).toString(16)
    return isHydrated ? {
            '--cloud-color': `#${mainColor}${othercolor()}${mainColor}${othercolor()}${mainColor}${othercolor()}`,
            '--cloud-x1-opacity': `${((Math.random() * 0.5) + 0.4)/2}`,
            '--cloud-x1-speed': `${Math.floor((Math.random() * 25) + 25)}s`,
            '--cloud-x1_5-opacity': `${((Math.random() * 0.4) + 0.1)/2}`,
            '--cloud-x1_5-speed': `${Math.floor((Math.random() * 35) + 25)}s`,
            '--cloud-x2-opacity': `${((Math.random() * 0.4) + 0.4)/2}`,
            '--cloud-x2-speed': `${Math.floor((Math.random() * 45) + 25)}s`,
            '--cloud-x3-opacity': `${((Math.random() * 0.3) + 0.65)/2}`,
            '--cloud-x3-speed': `${Math.floor((Math.random() * 65) + 25)}s`,
            '--cloud-x4-opacity': `${((Math.random() * 0.3) + 0.60)/2}`,
            '--cloud-x4-speed': `${Math.floor((Math.random() * 85) + 25)}s`,
            '--cloud-x5-opacity': `${((Math.random() * 0.3) + 0.2)/2}`,
            '--cloud-x5-speed': `${Math.floor((Math.random() * 120) + 25)}s`,
          }: 
    {}
}