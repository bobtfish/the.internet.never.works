import { CSSProperties, AnchorProps, TextProps } from '@mantine/core';

export type MarkdownLink = {
    match: string
    text: string
    url: string
  }

export type MarkdownText = string | React.ReactNode[]

export type MarkdownStringStylesNames = 'root' | 'anchor'

export type MarkdownStringStyles = Partial<Record<MarkdownStringStylesNames, CSSProperties>>

export type MarkdownAnchorProps = Omit<AnchorProps, 'key' | 'href' | 'styles'>

export type MarkdownStringTextProps = Omit<TextProps, 'classNames' | 'span' | 'styles'>

export type MarkdownParagraphTextProps = Omit<TextProps, 'styles'>

export type MarkdownAnchorTarget = 'blank' | 'self'

export type MarkdownStringBaseProps = {
    component?: string
    markdown: MarkdownText
    styles?: MarkdownStringStyles
    anchorProps?: MarkdownAnchorProps
    anchorTarget?: MarkdownAnchorTarget
    classNames?: Partial<Record<MarkdownStringStylesNames, string>>
}

export type MarkdownStringProps = MarkdownStringBaseProps & MarkdownStringTextProps

export type MarkdownParagraphProps = MarkdownStringBaseProps & MarkdownParagraphTextProps

