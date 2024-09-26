import { Text } from '@mantine/core'
import { splitParagraphs } from './Parser'
import { MarkdownString } from './MarkdownString'
import type { MarkdownParagraphProps } from './types'

export function MarkdownParagraph ({
  className,
  markdown,
  styles,
  anchorProps,
  anchorTarget,
  classNames,
  ...textProps
}: MarkdownParagraphProps) {
  const anchorStyles = styles?.anchor
  const textStyles = styles?.root
  const paras = splitParagraphs(markdown)
  return (
    <>
      {paras.map((para, idx) => {
        return (
          <Text<any>
            {...textProps}
            className={className}
            classNames={{root: classNames?.root}}
            style={{textWrap: 'pretty', margin: 'var(--mantine-spacing-sm)', marginRight: 'var(--mantine-spacing-lg)'}}
            styles={{ root: textStyles }}
            key={idx}
          >
            <MarkdownString
              classNames={{anchor: classNames?.anchor}}
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
