import { useHydrated } from 'remix-utils/use-hydrated'
import { Container, Title, Text, Button, Group } from '@mantine/core'
import cx from 'clsx'
import { Illustration } from './Illustration'
import classes from './NotFound.module.css'

export function NotFound () {
  const isHydrated = useHydrated()
  return (
    <>
      {isHydrated ? (
        <div id='clouds'>
          <div className={cx(classes.cloud, classes.x1)} />
          <div className={cx(classes.cloud, classes.x1_5)}></div>
          <div className={cx(classes.cloud, classes.x2)}></div>
          <div className={cx(classes.cloud, classes.x3)}></div>
          <div className={cx(classes.cloud, classes.x4)}></div>
          <div className={cx(classes.cloud, classes.x5)}></div>
        </div>
      ) : (
        <></>
      )}
      <Container className={classes.root}>
        <div className={classes.inner}>
          <Illustration className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>Nothing to see here</Title>
            <Text
              c='dimmed'
              size='lg'
              ta='center'
              className={classes.description}
            >
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL.
            </Text>
            <Group justify='center'>
              <Button size='md'>Take me back to home page</Button>
            </Group>
          </div>
        </div>
      </Container>
    </>
  )
}
