import { Title, Text } from "@mantine/core";
import classes from './CV.module.css'

export function Name ({ name }: { name: string }) {
    return (
      <Title ta='center' className={classes.name}>
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