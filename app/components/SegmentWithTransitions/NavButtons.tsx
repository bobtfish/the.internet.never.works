import { Button, Group } from '@mantine/core'
import { ArrowLeftIcon, ArrowRightIcon } from '~/components'
import type { ATransitionProps, TransitionToFunction } from './types'

export type ButtonProps = {
    className: string
    data: ATransitionProps[]
    index: number
    amTransitioning: boolean
    transitionTo: TransitionToFunction
  }
  
  export function NavButtons({className, data, index, amTransitioning, transitionTo}: ButtonProps) {
    return <Group justify='center'>
      <BackButton {...{className, data, index, amTransitioning, transitionTo}} />
      <ForwardButton {...{className, data, index, amTransitioning, transitionTo}} />
    </Group>
  }
  
  function BackButton({className, data, index, amTransitioning, transitionTo}: ButtonProps) {
    if (index === 0) return <></>
    return <Button
      disabled={amTransitioning}
      leftSection={<ArrowLeftIcon />}
      size='lg'
      className={className}
      onClick={() => transitionTo(data[index - 1].name)}
    >
      {data[index - 1].name}
    </Button>
  }
  
  function ForwardButton({className, data, index, amTransitioning, transitionTo}: ButtonProps) {
    const numElements = data.length
    if (index === numElements - 1) return <></>
    return <Button
        disabled={amTransitioning}
        rightSection={<ArrowRightIcon />}
        size='lg'
        className={className}
        onClick={() => transitionTo(data[index + 1].name)}
      >
        {data[index + 1].name}
      </Button>
  }