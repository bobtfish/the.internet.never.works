import { Title, Text, Box, ScrollArea } from '@mantine/core'
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
      <MarkdownString
        classNames={{ anchor: classes.anchor }}
        markdown={synopsis}
      />
    </Text>
  )
}

function Profile ({ profile }: { profile: string }) {
  return (
    <>
      <Title order={2}>Profile</Title>
      <MarkdownParagraph
        classNames={{ anchor: classes.anchor }}
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
      color: 'red'
    },
    {
      name: 'Employment History',
      content: <EmploymentHistory employmentHistoryData={cvdata.employmentHistory} />,
      color: 'blue'
    },
    {
      name: 'Education',
      content: <Education educationData={cvdata.education} />,
      color: 'green',
      selected: true,
    },
    {
      name: 'Programming Languages',
      content: (
        <ProgrammingLanguages
          programmingLanguagesData={cvdata.programmingLanguages}
        />
      ),
      color: 'orange'
    },
    {
      name: 'Open Source Projects',
      content: (
        <OpenSourceProjects
          openSourceProjectsData={cvdata.openSourceProjects}
        />
      ),
      color: 'purple'
    }
  ]
  return (
    <Box className={classes.root}>
        <Name name={cvdata.name} />
        <Synopsis synopsis={cvdata.synopsis} />
        <SegmentWithTransitions
          data={sections}
          classes={{ control: classes.control }}
        />
    </Box>
  )
}
