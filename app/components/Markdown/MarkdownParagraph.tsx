import { Text } from '@mantine/core'
import cx from 'clsx'
import { splitParagraphs } from './Parser'
import { MarkdownString } from './MarkdownString'
import type { MarkdownParagraphProps } from './types'
import classes from './MarkdownParagraph.module.css'

export function MarkdownParagraph ({
  className,
  markdown,
  styles,
  anchorProps,
  anchorTarget,
  ...textProps
}: MarkdownParagraphProps) {
  const anchorStyles = styles?.anchor
  const textStyles = styles?.root
  const paras = splitParagraphs(markdown)
  return (
    <>
      {paras.map((para, idx) => {
        return (
          <Text
            {...textProps}
            className={cx(className, classes.paragraph)}
            styles={{ root: textStyles }}
            key={idx}
          >
            <MarkdownString
              styles={{ anchor: anchorStyles }}
              anchorTarget={anchorTarget}
              anchorProps={anchorProps}
              inherit
              markdown={para}
            />
          </Text>
        )
      }, markdown)}
    </>
  )
}
