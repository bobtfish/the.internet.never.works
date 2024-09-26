import { Anchor, Text } from '@mantine/core';
import reactStringReplace from 'react-string-replace';
import { parseLinks } from './Parser'
import type { MarkdownStringProps } from './types'

export function MarkdownString({ markdown, styles, anchorProps, anchorTarget, classNames, component = 'span', ...textProps }: MarkdownStringProps) {
    const anchorStyles = styles?.anchor
    anchorTarget ||= 'self'
    const links = parseLinks(markdown)
    return <Text<any> {...textProps} className={classNames?.root} component={component} styles={{root: styles?.root}}>{
        links.reduce((acc, { match, text, url }, i) => {
            return reactStringReplace(acc, match, (_match, j) => (
                <Anchor {...anchorProps} className={classNames?.anchor} target={'_' + anchorTarget} key={i+'-'+j} href={url} styles={{root: anchorStyles}}>{text}</Anchor>
            ))
        }, markdown)
    }</Text>
}