import { useState } from 'react'
import {
  SegmentedControl,
} from '@mantine/core'
import { MyTransition } from './MyTransition'

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
  | 'pop-bottom-right';

export type SegmentWithTransitionsPropsData = {
  name: string
  content: JSX.Element
  selected?: boolean
}
export type SegmentWithTransitionsProps = {
  data: SegmentWithTransitionsPropsData[]
  classes: {
    control?: string
  }
  duration?: number
  transition?: MantineTransitionName
}

export function SegmentWithTransitions ({ data, classes, duration, transition }: SegmentWithTransitionsProps) {
  const selected = data.find(datum => datum.selected)
  const [value, setValue] = useState(selected?.name || data[0].name)
  classes ||= { control: undefined }
  duration ||= 250
  transition ||= 'fade'

  return (
    <>
      {data.map((datum, i) => (
        <MyTransition key={i} selected={value === datum.name} duration={duration} transition={transition}>
          {datum.content}
        </MyTransition>
      ))}
      <SegmentedControl
        className={classes.control}
        value={value}
        onChange={newVal => setValue(newVal)}
        data={data.map(datum => datum.name)}
        transitionDuration={duration}
        fullWidth
      />
    </>
  )
}
