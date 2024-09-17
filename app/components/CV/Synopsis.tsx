import { Text } from "@mantine/core";
import {
    MarkdownString,
} from '~/components'
import classes from './CV.module.css'

export function Synopsis ({ synopsis }: { synopsis: string }) {
    return (
      <Text className={classes.synopsis} ta='center' fw={500}>
        <MarkdownString
          classNames={{ anchor: classes.anchor }}
          markdown={synopsis}
        />
      </Text>
    )
  }
