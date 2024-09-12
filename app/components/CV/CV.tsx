import { useState, useEffect } from 'react'
import {
  SegmentedControl,
  Box,
  Title,
  Text,
  Transition,
  MantineTransition
} from '@mantine/core'
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

function Profile ({
  profile,
  style
}: {
  profile: string
  style: React.CSSProperties
}) {
  return (
    <Box style={style}>
      <Title order={2}>Profile</Title>
      <MarkdownParagraph
        anchorProps={{
          underline: 'always',
          c: 'light-dark(var(--mantine-color-gray-8), var(--mantine-color-gray-5))'
        }}
        markdown={profile}
      />
    </Box>
  )
}

export function CV ({ cvdata }: CVProps) {
  const [value, setValue] = useState('Profile')
  return (
    <Box>
      <SegmentedControl
        value={value}
        onChange={setValue}
        data={[
          'Profile',
          'Employment',
          'Education',
          'Languages',
          'Open Source'
        ]}
      />
      <Name name={cvdata.name} />
      <Synopsis synopsis={cvdata.synopsis} />
      <MyTransition selected={value === 'Profile'}>
        {styles => <Profile style={styles} profile={cvdata.profile} />}
      </MyTransition>
      <MyTransition selected={value === 'Employment'}>
        {styles => (
          <EmploymentHistory
            style={styles}
            employmentHistoryData={cvdata.employmentHistory}
          />
        )}
      </MyTransition>
      <MyTransition selected={value === 'Education'}>
        {styles => (
          <Education style={styles} educationData={cvdata.education} />
        )}
      </MyTransition>
      <MyTransition selected={value === 'Languages'}>
        {styles => (
          <ProgrammingLanguages
            style={styles}
            programmingLanguagesData={cvdata.programmingLanguages}
          />
        )}
      </MyTransition>
      <MyTransition selected={value === 'Open Source'}>
        {styles => (
          <OpenSourceProjects
            style={styles}
            openSourceProjectsData={cvdata.openSourceProjects}
          />
        )}
      </MyTransition>
    </Box>
  )
}

type MyTransitionProps = {
  selected: boolean
  children: (styles: React.CSSProperties) => JSX.Element
  transition?: MantineTransition
  duration?: number
}

function MyWrapper ({
  children,
  styles,
  setHasRendered
}: {
  styles: React.CSSProperties
  children: (styles: React.CSSProperties) => JSX.Element
  setHasRendered: React.Dispatch<React.SetStateAction<boolean>>
}) {
  useEffect(() => {
    setHasRendered(true)
  })
  return children(styles)
}

function MyTransition ({
  duration,
  selected,
  children,
  transition
}: MyTransitionProps) {
  const [hasRendered, setHasRendered] = useState(false)
  return (
    <Transition
      mounted={hasRendered ? selected : true}
      transition={transition || 'fade'}
      keepMounted={true}
      duration={2000}
    >
      {styles => (
        <MyWrapper
          setHasRendered={setHasRendered}
          styles={!selected && !hasRendered ? { display: 'none' } : styles}
        >
          {children}
        </MyWrapper>
      )}
    </Transition>
  )
}
