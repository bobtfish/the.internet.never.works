import { Title, List, Box } from '@mantine/core'
import type { ProgrammingLanguage as ProgrammingLanguageData } from '~/data/CV'

export type ProgrammingLanguagesProps = {
  programmingLanguagesData: ProgrammingLanguageData[]
}

export function ProgrammingLanguagesList ({
  programmingLanguagesData
}: ProgrammingLanguagesProps) {
  return programmingLanguagesData.map(programmingLanguage => (
    <List.Item key={programmingLanguage}>{programmingLanguage}</List.Item>
  ))
}

export function ProgrammingLanguages ({
  programmingLanguagesData,
}: ProgrammingLanguagesProps) {
  return (
    <Box>
      <Title order={2}>Programming Languages</Title>
      <List>
        <ProgrammingLanguagesList
          programmingLanguagesData={programmingLanguagesData}
        />
      </List>
    </Box>
  )
}
