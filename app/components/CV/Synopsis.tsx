import {
    MarkdownString,
} from '~/components'
import classes from './CV.module.css'

export function Synopsis ({ synopsis }: { synopsis: string }) {
    return (
      <>
        <MarkdownString
          component='div'
          classNames={{ root: classes.synopsis, anchor: classes.anchor }}
          markdown={synopsis}
        />
      </>
    )
  }
