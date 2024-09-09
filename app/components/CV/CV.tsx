import type { CV as CVData } from '~/data/CV'

export type CVProps = {
    cvdata: CVData
}

export function CV({cvdata}: CVProps) {
    return (
        <div className="cv">
            <h1>CV</h1>
            <pre>{JSON.stringify(cvdata, null, 2)}</pre>
        </div>
    )
}