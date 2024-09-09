import { Title, Text } from '@mantine/core'

import { MarkdownParagraph, MarkdownString } from '../Markdown'
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
    <Title ta='center' mt={100}>
      <Text
        inherit
        variant='gradient'
        component='span'
        gradient={{ from: 'black', to: 'red' }}
      >
        {name}
      </Text>
    </Title>
  )
}

function Synopsis ({ synopsis }: { synopsis: string }) {
  return (
    <div>
      <p><MarkdownString markdown={synopsis} /></p>
    </div>
  )
}

function Profile ({ profile }: { profile: string }) {
  return (
    <div>
      <h2>Profile</h2>
      <MarkdownParagraph markdown={profile} />
    </div>
  )
}

export function CV ({ cvdata }: CVProps) {
  return (
    <div className='cv'>
      <Name name={cvdata.name} />
      <Synopsis synopsis={cvdata.synopsis} />
      <Profile profile={cvdata.profile} />
      <EmploymentHistory employmentHistoryData={cvdata.employmentHistory} />
      <Education educationData={cvdata.education} />
      <ProgrammingLanguages
        programmingLanguagesData={cvdata.programmingLanguages}
      />
      <OpenSourceProjects openSourceProjectsData={cvdata.openSourceProjects} />
    </div>
  )
}
