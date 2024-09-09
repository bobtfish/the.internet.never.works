import { Title, Text } from '@mantine/core'

export default function Index () {
  return (
    <Title ta='center' mt={100}>
      Welcome to{' '}
      <Text
        inherit
        variant='gradient'
        component='span'
        gradient={{ from: 'black', to: 'red' }}
      >
        Tom&apos;s CV
      </Text>
      <Text color='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        You can probably guess what&apos;s going to be here...
      </Text>
    </Title>
  )
}
