import { useState, useEffect } from 'react'
import {
  Box,
  ScrollArea,
  Transition,
  MantineTransition,
} from '@mantine/core'

type MyTransitionProps = {
    selected: boolean
    children: JSX.Element
    transition?: MantineTransition
    duration?: number
    onExited?: () => void
    name: string
  }

export function MyTransition ({
    duration,
    selected,
    children,
    transition,
    onExited,
    name,
  }: MyTransitionProps) {
    const [hasRendered, setHasRendered] = useState(false)
    const [hasExited, setHasExited] = useState(selected)
    useEffect(() => {
        // Perform some setup actions
        console.log('MyTransition mounted for ', name);
        return () => {
          // This is the cleanup function
          // It will be called when the component is unmounted
          console.log('MyTransition unmounted for ', name);
        };
      }, []);
    const TransitionWrapperBox = ({
      children,
      styles,
      setHasRendered,
      selected,
    }: {
      styles: React.CSSProperties
      children: JSX.Element
      setHasRendered: React.Dispatch<React.SetStateAction<boolean>>
      selected: boolean
    }) => {
        useEffect(() => {
            // Perform some setup actions
            console.log('TransitionWrapperBox mounted for ', name);
            return () => {
              // This is the cleanup function
              // It will be called when the component is unmounted
              console.log('TransitionWrapperBox unmounted for ', name);
            };
          }, []); 
      useEffect(() => setHasRendered(true)) // We have rendered once, we're good to set mounted = false in the <Transition> element 1 step up the tree
      const positionStyles: { [key: string]: string } = { position: 'absolute' }
      //               FIXME - FIXED HEIGHT HERE.

      return <Box style={{...styles, ...positionStyles}}><ScrollArea type="always" scrollbars='y' style={{backgroundColor: 'pink', height: '600px'}}>{children}</ScrollArea></Box>
    }
    const mounted = hasRendered ? selected : true
    return (
      <Transition
        mounted={mounted} // Force 'mounting' even unselected components initially, to get duration state setup correctly etc
        transition={transition}
        keepMounted={true} // Keep everything mounted at all times for print layout
        duration={duration}
        onEnter={() => {console.log("BEGIN Enter transition for ", name, ' going to mounted state ', mounted)}}
        onEntered={() => {console.log("END Enter transition for ", name, ' going to mounted state ', mounted)}}
        onExit={()=> {setHasExited(true); console.log("BEGIN Exit transition for ", name, ' going to mounted state ', mounted)}} // No need to set onEnter or onEntered as we will always have exit transitions
        onExited={()=> {setHasExited(true); console.log("END Exit transition for ", name, ' going to mounted state ', mounted); if (onExited) onExited()}} // Once the non-active parts have transitioned, return to normal functionality
      >
        {styles => {
            console.log(`Transition for ${name} rendering. Selected ${selected} hasExited ${hasExited} display:none ${!selected && !hasExited}`)
            return (
          <TransitionWrapperBox
            selected={selected}
            setHasRendered={setHasRendered}
            styles={!selected && !hasExited ? { display: 'none' } : styles} // We override the style for non-selected components to force no display
                                                                            // so that we don't see a bunch of exit animations on first paint
          >
            {children}
          </TransitionWrapperBox>
        )}}
      </Transition>
    )
  }
  