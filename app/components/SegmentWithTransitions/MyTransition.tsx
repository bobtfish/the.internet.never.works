import { useState, useEffect } from 'react'
import {
  Box,
  Transition,
  MantineTransition,
} from '@mantine/core'

type MyTransitionProps = {
    selected: boolean
    children: JSX.Element
    transition?: MantineTransition
    duration?: number
  }

export function MyTransition ({
    duration,
    selected,
    children,
    transition,
  }: MyTransitionProps) {
    const [hasRendered, setHasRendered] = useState(false)
    const [hasExited, setHasExited] = useState(selected)
    const TransitionWrapperBox = ({
      children,
      styles,
      setHasRendered,
    }: {
      styles: React.CSSProperties
      children: JSX.Element
      setHasRendered: React.Dispatch<React.SetStateAction<boolean>>
    }) => {
      useEffect(() => setHasRendered(true)) // We have rendered once, we're good to set mounted = false in the <Transition> element 1 step up the tree
      return <Box style={{...styles, position: 'absolute'}}>{children}</Box>
    }
  
    return (
      <Transition
        mounted={hasRendered ? selected : true} // Force 'mounting' even unselected components initially, to get duration state setup correctly etc
        transition={transition}
        keepMounted={true} // Keep everything mounted at all times for print layout
        duration={duration}
        onExit={()=> setHasExited(true)} // No need to set onEnter or onEntered as we will always have exit transitions
        onExited={()=> setHasExited(true)} // Once the non-active parts have transitioned, return to normal functionality
      >
        {styles => (
          <TransitionWrapperBox
            setHasRendered={setHasRendered}
            styles={!selected && !hasExited ? { display: 'none' } : styles} // We override the style for non-selected components to force no display
                                                                            // so that we don't see a bunch of exit animations on first paint
          >
            {children}
          </TransitionWrapperBox>
        )}
      </Transition>
    )
  }
  