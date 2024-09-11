import { Text, TextProps } from '@mantine/core'
import { splitParagraphs } from './Parser'
import { MarkdownString } from './MarkdownString'
import classes from './MarkdownParagraph.module.css'
import cx from 'clsx'

export type MarkdownParagraphProps = {
    markdown: string | React.ReactNode[];
    className?: string
}

export function MarkdownParagraph({ className, markdown, ...others }: MarkdownParagraphProps & TextProps) {
    const paras = splitParagraphs(markdown)
    return <>{paras.map((para, idx) => {
        return <Text className={cx(className, classes.paragraph)} key={idx} {...others}><MarkdownString markdown={para} /></Text>
    }, markdown)}</>
}