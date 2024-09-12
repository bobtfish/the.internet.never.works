import { CSSProperties, AnchorProps, TextProps } from '@mantine/core';

export type MarkdownText = string | React.ReactNode[]

export type MarkdownStringStylesNames = 'root' | 'anchor'

export type MarkdownStringStyles = Partial<Record<MarkdownStringStylesNames, CSSProperties>>

export type MarkdownAnchorProps = Omit<AnchorProps, 'key' | 'href' | 'styles'>

export type MarkdownStringTextProps = Omit<TextProps, 'span' | 'component' | 'styles'>

export type MarkdownParagraphTextProps = Omit<TextProps, 'styles'>

export type MarkdownAnchorTarget = 'blank' | 'self'

export type MarkdownStringBaseProps = {
    markdown: MarkdownText
    styles?: MarkdownStringStyles
    anchorProps?: MarkdownAnchorProps
    anchorTarget?: MarkdownAnchorTarget
}

export type MarkdownStringProps = MarkdownStringBaseProps & MarkdownStringTextProps

export type MarkdownParagraphProps = MarkdownStringBaseProps & MarkdownParagraphTextProps

