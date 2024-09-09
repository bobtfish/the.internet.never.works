import reactStringReplace from 'react-string-replace';
import { parseLinks } from './Parser'

export function MarkdownString({ markdown }: { markdown: string | React.ReactNode[] }) {
    const links = parseLinks(markdown)
    return <span>{links.reduce((acc, { match, text, url }) => {
        return reactStringReplace(acc, match, (_match, i) => (
            <a key={i} href={url}>{text}</a>
        ))
    }, markdown)}</span>
}