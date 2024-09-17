import { Title, Text } from "@mantine/core";

export function Name ({ name }: { name: string }) {
    return (
      <Title ta='center' style={{marginBlockEnd: 0}} pb='var(--mantine-spacing-xs)'>
        <Text
          inherit
          variant='gradient'
          component='span'
          gradient={{ from: 'white', to: 'red' }}
          lightHidden
        >
          {name}
        </Text>
        <Text
          inherit
          variant='gradient'
          component='span'
          gradient={{ from: 'black', to: 'red' }}
          darkHidden
        >
          {name}
        </Text>
      </Title>
    )
  }