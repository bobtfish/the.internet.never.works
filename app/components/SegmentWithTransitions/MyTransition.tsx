import { useState, useEffect } from 'react'
import {
  Box,
  ScrollArea,
  Transition,
  MantineTransition,
} from '@mantine/core'
import classes from './SegmentWithTransitions.module.css'

type MyTransitionProps = {
    selected: boolean
    children: JSX.Element
    transition?: MantineTransition
    duration?: number
    onExited?: () => void
    name: string
  }

const TransitionWrapperBox = ({
    children,
    style,
    setHasRendered,
  }: {
    style: React.CSSProperties
    children: JSX.Element
    setHasRendered: React.Dispatch<React.SetStateAction<boolean>>
  }) => {
    useEffect(() => setHasRendered(true)) // We have rendered once, we're good to set mounted = false in the <Transition> element 1 step up the tree
    //               FIXME - FIXED HEIGHT HERE.
    return <Box className={classes.transitionWrapperBox} style={style}>
      <ScrollArea type="always" scrollbars='y' className={classes.transitionWrapperScrollArea}>
        {children}
      </ScrollArea>
    </Box>
  }

export function MyTransition ({
    duration,
    selected,
    children,
    transition,
    onExited,
  }: MyTransitionProps) {
    const [hasRendered, setHasRendered] = useState(false)
    const [hasExited, setHasExited] = useState(selected)
    
    const mounted = hasRendered ? selected : true
    return (
      <Transition
        mounted={mounted} // Force 'mounting' even unselected components initially, to get duration state setup correctly etc
        transition={transition}
        keepMounted={true} // Keep everything mounted at all times for print layout
        duration={duration}
        onExit={()=> setHasExited(true)} // No need to set onEnter or onEntered as we will always have exit transitions
        onExited={()=> {setHasExited(true); if (onExited) onExited()}} // Once the non-active parts have transitioned, return to normal functionality
      >
        {styles => {
            return (
          <TransitionWrapperBox
            setHasRendered={setHasRendered}
            style={!selected && !hasExited ? { display: 'none' } : styles} // We override the style for non-selected components to force no display
                                                                                      // so that we don't see a bunch of exit animations on first paint
          >
            {children}
          </TransitionWrapperBox>
        )}}
      </Transition>
    )
  }
  