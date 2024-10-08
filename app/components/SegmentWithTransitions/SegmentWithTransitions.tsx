import { SegmentedControl, Box } from '@mantine/core'
import cx from 'clsx'
import { MyTransition } from './MyTransition'
import baseClasses from './SegmentWithTransitions.module.css'
import type { SegmentWithTransitionsProps } from './types'
import { useMyTransition } from './hooks'
import { NavButtons } from './NavButtons'

export function SegmentWithTransitions ({
  data,
  classes,
  duration,
  transition
}: SegmentWithTransitionsProps) {
  const { selected, transitionTo, amTransitioning, stopTransition } = useMyTransition((data.find(datum => datum.selected) || data[0]).name)
  classes ||= { control: undefined }
  duration ||= 250
  transition ||= 'fade'
  const buttonClass = cx(baseClasses.button, classes.button)
  const controlClass = cx(baseClasses.control, classes.control)
  return (
    <Box className={baseClasses.root}>
      {data.map((datum, i) => (
        <MyTransition
          key={i}
          name={datum.name}
          selected={selected === datum.name}
          duration={duration}
          transition={transition}
          onExited={stopTransition}
        >
          <Box>
            {datum.content}
            <NavButtons amTransitioning={amTransitioning} className={buttonClass} transitionTo={transitionTo} index={i} data={data} />
          </Box>
        </MyTransition>
      ))}
      <SegmentedControl
        className={controlClass}
        value={selected}
        onChange={transitionTo}
        data={data.map(datum => datum.name)}
        transitionDuration={duration}
        fullWidth
      />
    </Box>
  )
}
