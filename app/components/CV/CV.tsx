import { Title, Text } from '@mantine/core'
import {
  MarkdownParagraph,
  MarkdownString,
  SegmentWithTransitions,
  type SegmentWithTransitionsPropsData
} from '~/components'
import type { CV as CVData } from '~/data/CV'
import { EmploymentHistory } from './EmploymentHistory'
import { Education } from './Education'
import { ProgrammingLanguages } from './ProgrammingLanguages'
import { OpenSourceProjects } from './OpenSourceProjects'
import classes from './CV.module.css'

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
    <Text ta='center' fw={500} pb='1rem'>
      <MarkdownString markdown={synopsis} />
    </Text>
  )
}

function Profile ({ profile }: { profile: string }) {
  return (
    <>
      <Title order={2}>Profile</Title>
      <MarkdownParagraph
        anchorProps={{
          underline: 'always',
          c: 'light-dark(var(--mantine-color-gray-8), var(--mantine-color-gray-5))'
        }}
        markdown={profile}
      />
    </>
  )
}

export function CV ({ cvdata }: CVProps) {
  const sections: SegmentWithTransitionsPropsData[] = [
    {
      name: 'Profile',
      content: <Profile profile={cvdata.profile} />,
      selected: true
    },
    {
      name: 'Employment History',
      content: (
        <EmploymentHistory employmentHistoryData={cvdata.employmentHistory} />
      )
    },
    {
      name: 'Education',
      content: <Education educationData={cvdata.education} />
    },
    {
      name: 'Programming Languages',
      content: (
        <ProgrammingLanguages
          programmingLanguagesData={cvdata.programmingLanguages}
        />
      )
    },
    {
      name: 'Open Source Projects',
      content: (
        <OpenSourceProjects
          openSourceProjectsData={cvdata.openSourceProjects}
        />
      )
    }
  ]
  return (
    <>
      <Name name={cvdata.name} />
      <Synopsis synopsis={cvdata.synopsis} />
      <SegmentWithTransitions
        data={sections}
        classes={{ control: classes.control }}
      />
    </>
  )
}
