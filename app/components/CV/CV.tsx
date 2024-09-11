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
    <Title ta='center' pb={'2rem'}>
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
    <Text fw={500}>
      <MarkdownString markdown={synopsis} />
    </Text>
  )
}

function Profile ({ profile }: { profile: string }) {
  return (
    <Box>
      <h2>Profile</h2>
      <MarkdownParagraph pl="2rem" markdown={profile} />
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
