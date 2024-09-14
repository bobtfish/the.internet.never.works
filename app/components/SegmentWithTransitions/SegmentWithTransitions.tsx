import { useState } from 'react'
import { SegmentedControl, Button, Box, Group } from '@mantine/core'
import cx from 'clsx'
import { MyTransition } from './MyTransition'
import { ArrowLeftIcon, ArrowRightIcon } from '~/components'
import baseClasses from './SegmentWithTransitions.module.css'

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

export type SegmentWithTransitionsPropsData = {
  name: string
  content: JSX.Element
  selected?: boolean
  color: string
}
export type SegmentWithTransitionsProps = {
  data: SegmentWithTransitionsPropsData[]
  classes: {
    control?: string
    button?: string
  }
  duration?: number
  transition?: MantineTransitionName
}

export function SegmentWithTransitions ({
  data,
  classes,
  duration,
  transition
}: SegmentWithTransitionsProps) {
  const selected = data.find(datum => datum.selected)
  const [value, setValue] = useState(selected?.name || data[0].name)
  const [amTransitioning, setTransitioning] = useState(false)
  const transitionTo = (newVal: string) => {
    setTransitioning(true)
    setValue(newVal)
  }
  classes ||= { control: undefined }
  duration ||= 10000
  transition ||= 'fade'
  const numElements = data.length
  const buttonClass = cx(baseClasses.button, classes.button)
  return (
    <>
      {data.map((datum, i) => (
        <MyTransition
          key={i}
          name={datum.name}
          selected={value === datum.name}
          duration={duration}
          transition={transition}
          onExited={() => setTransitioning(false)}
        >
          <Box style={{ backgroundColor: datum.color }}>
            {datum.content}
            <Group justify='center'>
              {i > 0 ? (
                <Button
                  disabled={amTransitioning}
                  leftSection={<ArrowLeftIcon />}
                  size='lg'
                  className={buttonClass}
                  onClick={() => transitionTo(data[i - 1].name)}
                >
                  {data[i - 1].name}
                </Button>
              ) : (
                <></>
              )}
              {i < numElements - 1 ? (
                <Button
                  disabled={amTransitioning}
                  rightSection={<ArrowRightIcon />}
                  size='lg'
                  className={buttonClass}
                  onClick={() => transitionTo(data[i + 1].name)}
                >
                  {data[i + 1].name}
                </Button>
              ) : (
                <></>
              )}
            </Group>
          </Box>
        </MyTransition>
      ))}
      <SegmentedControl
        className={classes.control}
        value={value}
        onChange={newVal => transitionTo(newVal)}
        data={data.map(datum => datum.name)}
        transitionDuration={duration}
        fullWidth
      />
    </>
  )
}
