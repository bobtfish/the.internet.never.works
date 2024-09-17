import { Box } from '@mantine/core'
import {
  SegmentWithTransitions,
  type ATransitionProps
} from '~/components'
import type { CVProps } from './types'
import { Name } from './Name'
import { Synopsis } from './Synopsis'
import { Profile } from './Profile'
import { EmploymentHistory } from './EmploymentHistory'
import { Education } from './Education'
import { ProgrammingLanguages } from './ProgrammingLanguages'
import { OpenSourceProjects } from './OpenSourceProjects'
import classes from './CV.module.css'

export function CV ({ cvdata }: CVProps) {
  const sections: ATransitionProps[] = [
    {
      name: 'Profile',
      content: <Profile profile={cvdata.profile} />,
      selected: true,
    },
    {
      name: 'Employment History',
      content: <EmploymentHistory employmentHistoryData={cvdata.employmentHistory} />,
    },
    {
      name: 'Education',
      content: <Education educationData={cvdata.education} />,
    },
    {
      name: 'Programming Languages',
      content: (
        <ProgrammingLanguages
          programmingLanguagesData={cvdata.programmingLanguages}
        />
      ),
    },
    {
      name: 'Open Source Projects',
      content: (
        <OpenSourceProjects
          openSourceProjectsData={cvdata.openSourceProjects}
        />
      ),
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
