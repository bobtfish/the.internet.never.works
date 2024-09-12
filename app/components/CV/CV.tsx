import { Box, Title, Text } from '@mantine/core'
import { MarkdownParagraph, MarkdownString } from '~/components'
import type { CV as CVData } from '~/data/CV'
import { EmploymentHistory } from './EmploymentHistory'
import { Education } from './Education'
import { ProgrammingLanguages } from './ProgrammingLanguages'
import { OpenSourceProjects } from './OpenSourceProjects'

export type CVProps = {
  cvdata: CVData
}

function Name ({ name }: { name: string }) {
  return (
    <Title ta='center' pb='var(--mantine-spacing-xs)'>
      <Text
        inherit
        variant='gradient'
        component='span'
        gradient={{ from: 'white', to: 'red' }}
        lightHidden
      >
        {name}
      </Text>
      <Text
        inherit
        variant='gradient'
        component='span'
        gradient={{ from: 'black', to: 'red' }}
        darkHidden
      >
        {name}
      </Text>
    </Title>
  )
}

function Synopsis ({ synopsis }: { synopsis: string }) {
  return (
    <Text ta='center' fw={500}>
      <MarkdownString markdown={synopsis} />
    </Text>
  )
}

function Profile ({ profile }: { profile: string }) {
  return (
    <Box>
      <Title order={2}>Profile</Title>
      <MarkdownParagraph anchorProps={{
                underline: 'always',
                c: 'light-dark(var(--mantine-color-gray-8), var(--mantine-color-gray-5))'
              }} markdown={profile} />
    </Box>
  )
}

export function CV ({ cvdata }: CVProps) {
  return (
    <Box>
      <Name name={cvdata.name} />
      <Synopsis synopsis={cvdata.synopsis} />
      <Profile profile={cvdata.profile} />
      <EmploymentHistory employmentHistoryData={cvdata.employmentHistory} />
      <Education educationData={cvdata.education} />
      <ProgrammingLanguages
        programmingLanguagesData={cvdata.programmingLanguages}
      />
      <OpenSourceProjects openSourceProjectsData={cvdata.openSourceProjects} />
    </Box>
  )
}
