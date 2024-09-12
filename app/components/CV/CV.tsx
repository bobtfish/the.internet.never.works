import { useState, useEffect } from 'react'
import {
  SegmentedControl,
  Box,
  Title,
  Text,
  Transition,
  MantineTransition,
} from '@mantine/core'
import { MarkdownParagraph, MarkdownString } from '~/components'
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
    <Text ta='center' fw={500} pb="1rem">
      <MarkdownString markdown={synopsis} />
    </Text>
  )
}

function Profile ({
  profile,
}: {
  profile: string
}) {
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
  const [value, setValue] = useState('Profile')
  return (
    <Box style={{backgroundColor: 'red', paddingTop: 0, marginTop: 0}}>
      <Name name={cvdata.name} />
      <Synopsis synopsis={cvdata.synopsis} />
      <MyTransition selected={value === 'Profile'}>
        <Profile profile={cvdata.profile} />
      </MyTransition>
      <MyTransition selected={value === 'Employment'}>
          <EmploymentHistory
            employmentHistoryData={cvdata.employmentHistory}
          />
      </MyTransition>
      <MyTransition selected={value === 'Education'}>
          <Education educationData={cvdata.education} />
      
      </MyTransition>
      <MyTransition selected={value === 'Languages'}>
          <ProgrammingLanguages
            programmingLanguagesData={cvdata.programmingLanguages}
          />
      </MyTransition>
      <MyTransition selected={value === 'Open Source'}>
          <OpenSourceProjects
            openSourceProjectsData={cvdata.openSourceProjects}
          />
      </MyTransition>
      <SegmentedControl
        className={classes.control}
        value={value}
        onChange={(newVal) => {setValue(newVal); console.log('set onChange to ', newVal)}}
        data={[
          'Profile',
          'Employment',
          'Education',
          'Languages',
          'Open Source'
        ]}
        transitionDuration={3000}
        fullWidth
      />
    </Box>

  )
}

type MyTransitionProps = {
  selected: boolean
  children: JSX.Element
  transition?: MantineTransition
  duration?: number
}

function MyTransition ({
  duration,
  selected,
  children,
  transition,
}: MyTransitionProps) {
  const [hasRendered, setHasRendered] = useState(false)
  const [hasExited, setHasExited] = useState(selected)
  duration = 3000
  const TransitionWrapperBox = ({
    children,
    styles,
    setHasRendered,
  }: {
    styles: React.CSSProperties
    children: JSX.Element
    setHasRendered: React.Dispatch<React.SetStateAction<boolean>>
  }) => {
    useEffect(() => setHasRendered(true)) // We have rendered once, we're good to set mounted = false in the <Transition> element 1 step up the tree
    return <Box style={{...styles, position: 'absolute'}}>{children}</Box>
  }

  return (
    <Transition
      mounted={hasRendered ? selected : true} // Force 'mounting' even unselected components initially, to get duration state setup correctly etc
      transition={transition || 'fade'}
      keepMounted={true} // Keep everything mounted at all times for print layout
      duration={duration}
      onExit={()=> setHasExited(true)} // No need to set onEnter or onEntered as we will always have exit transitions
      onExited={()=> setHasExited(true)} // Once the non-active parts have transitioned, return to normal functionality
    >
      {styles => (
        <TransitionWrapperBox
          setHasRendered={setHasRendered}
          styles={!selected && !hasExited ? { display: 'none' } : styles} // We override the style for non-selected components to force no display
                                                                          // so that we don't see a bunch of exit animations on first paint
        >
          {children}
        </TransitionWrapperBox>
      )}
    </Transition>
  )
}
