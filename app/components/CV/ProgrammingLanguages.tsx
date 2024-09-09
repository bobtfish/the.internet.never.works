import type { ProgrammingLanguage as ProgrammingLanguageData } from '~/data/CV'

export type ProgrammingLanguagesProps = {
  programmingLanguagesData: ProgrammingLanguageData[]
}

export function ProgrammingLanguagesList ({
  programmingLanguagesData
}: ProgrammingLanguagesProps) {
  return programmingLanguagesData.map(programmingLanguage => (
    <li key={programmingLanguage}>{programmingLanguage}</li>
  ))
}

export function ProgrammingLanguages ({
  programmingLanguagesData
}: ProgrammingLanguagesProps) {
  return (
    <div>
      <h2>Programming Languages</h2>
      <ul>
        <ProgrammingLanguagesList
          programmingLanguagesData={programmingLanguagesData}
        />
      </ul>
    </div>
  )
}
