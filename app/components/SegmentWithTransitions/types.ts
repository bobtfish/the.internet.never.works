// From https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/components/Transition/transitions.ts - not exported :(
type MantineTransitionName =
    | 'fade'
    | 'fade-down'
    | 'fade-up'
    | 'fade-left'
    | 'fade-right'
    | 'skew-up'
    | 'skew-down'
    | 'rotate-right'
    | 'rotate-left'
    | 'slide-down'
    | 'slide-up'
    | 'slide-right'
    | 'slide-left'
    | 'scale-y'
    | 'scale-x'
    | 'scale'
    | 'pop'
    | 'pop-top-left'
    | 'pop-top-right'
    | 'pop-bottom-left'
    | 'pop-bottom-right'
  
export type TransitionToFunction = (to: string) => void

  export type ATransitionProps = {
    name: string
    content: JSX.Element
    selected?: boolean
    color: string
  }
  export type SegmentWithTransitionsProps = {
    data: ATransitionProps[]
    classes: {
      control?: string
      button?: string
    }
    duration?: number
    transition?: MantineTransitionName
  }