import { Anchor, Text} from '@mantine/core';
import reactStringReplace from 'react-string-replace';
import { parseLinks } from './Parser'
import type { MarkdownStringProps } from './types'

export function MarkdownString({ markdown, styles, anchorProps, anchorTarget, ...textProps }: MarkdownStringProps) {
    const anchorStyles = styles?.anchor
    anchorTarget ||= 'self'
    const links = parseLinks(markdown)
    return <Text {...textProps} span component='span' styles={{root: styles?.root}}>{links.reduce((acc, { match, text, url }) => {
        return reactStringReplace(acc, match, (_match, i) => (
            <Anchor {...anchorProps} target={'_' + anchorTarget} key={i} href={url} styles={{root: anchorStyles}}>{text}</Anchor>
        ))
    }, markdown)}</Text>
}