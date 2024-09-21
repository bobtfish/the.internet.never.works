import { Title, Text } from "@mantine/core";
import classes from './CV.module.css'

export function Name ({ name }: { name: string }) {
    return (
      <Title ta='center' className={classes.name}>
        <Text
          inherit
          component='span'
        >
          {name}
        </Text>
      </Title>
    )
  }