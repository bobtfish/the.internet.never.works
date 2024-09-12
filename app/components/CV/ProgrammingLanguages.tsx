import { Title, Box } from '@mantine/core'
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
  programmingLanguagesData,
  style
}: ProgrammingLanguagesProps & {style: React.CSSProperties}) {
  return (
    <Box style={style}>
      <Title order={2}>Programming Languages</Title>
      <ul>
        <ProgrammingLanguagesList
          programmingLanguagesData={programmingLanguagesData}
        />
      </ul>
    </Box>
  )
}
