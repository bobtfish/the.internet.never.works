import { splitParagraphs } from './Parser'
import { MarkdownString } from './MarkdownString'

export function MarkdownParagraph({ markdown }: { markdown: string | React.ReactNode[] }) {
    const paras = splitParagraphs(markdown)
    return <div>{paras.map((para, idx) => {
        // eslint-disable-next-line react/jsx-key
        return <p key={idx}><MarkdownString markdown={para} /></p>
    }, markdown)}</div>
}