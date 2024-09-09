import { splitParagraphs } from './Parser'
import { MarkdownString } from './MarkdownString'

export function MarkdownParagraph({ markdown }: { markdown: string | React.ReactNode[] }) {
    const paras = splitParagraphs(markdown)
    return <div>{paras.map((para) => {
        // eslint-disable-next-line react/jsx-key
        return <p><MarkdownString markdown={para} /></p>
    }, markdown)}</div>
}