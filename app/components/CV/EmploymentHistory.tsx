import {
  Title,
  Accordion,
  Anchor,
  Text,
  Group,
  Box,
  Timeline,
  Divider,
  List
} from '@mantine/core'
import cx from 'clsx'
import { MarkdownString } from '~/components'
import classes from './CV.module.css'
import type { Employment as EmploymentData } from '~/data/CV'
import { ExternalLinkIcon } from '~/components/Icons'

export type EmploymentHistoryProps = {
  employmentHistoryData: EmploymentData[]
}

function EmploymentAccomplishments ({
  employment
}: {
  employment: EmploymentData
}) {
  return (
    <>
      <List>
        {employment.accomplishments.map((accomplishment, idx) => (
          <List.Item pl='md' key={idx}>
            <MarkdownString
              classNames={{anchor: classes.anchor}}
              markdown={accomplishment.description}
              anchorTarget='blank'
              anchorProps={{
                underline: 'always',
                c: 'light-dark(var(--mantine-color-gray-8), var(--mantine-color-gray-5))'
              }}
            />
          </List.Item>
        ))}
      </List>
    </>
  )
}

function EmploymentFullDates ({ employment }: { employment: EmploymentData }) {
  const numPositions = employment.positions.length
  if (numPositions == 1) return <EmploymentHistoryShortJobDates employment={employment} classNames={[classes.employmentHistoryItemShortJobDates]}/>
  return (
    <>
      <Title order={4} pb='sm'>
        Timeline:
      </Title>
      <Timeline pl='lg' bulletSize={24} lineWidth={2}>
        {employment.positions.map((position, idx) => (
          <Timeline.Item key={idx} title={position.title}>
            <Text c='dimmed' size='sm'>
              {position.startDate} - {position.endDate}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
      <Divider
        w='80%'
        mt='lg'
        pb='sm'
        ml='auto'
        mr='auto'
        color='light-dark(var(--mantine-color-gray-8), var(--mantine-color-gray-5))'
      />
    </>
  )
}

function EmploymentItem ({ employment }: { employment: EmploymentData }) {
  return (
    <>
      {employment.positions.length <= 1 ? <EmploymentHistoryJobTitle employment={employment} classNames={[classes.employmentHistoryItemJobTitle]}/> : <></>}
      <EmploymentFullDates employment={employment} />
      <EmploymentAccomplishments employment={employment} />
    </>
  )
}

export function EmploymentHistory ({
  employmentHistoryData,
}: EmploymentHistoryProps) {
  const employmentHistoryList = employmentHistoryData.map(employment => (
    <Accordion.Item key={employment.companyName} value={employment.companyName}>
      <Accordion.Control>
        <EmploymentHistoryControl employment={employment} />
      </Accordion.Control>
      <Accordion.Panel>
        <EmploymentItem employment={employment} />
      </Accordion.Panel>
    </Accordion.Item>
  ))
  return (
    <>
      <Title order={2}>Employment History</Title>
      <Accordion
        chevronPosition='left'
        variant='subtle'
        multiple
        classNames={{item: classes.employmentHistoryItem, root: classes.employmentHistoryAccordian}}
      >
        {employmentHistoryList}
      </Accordion>
    </>
  )
}

function EmploymentHistoryControl ({ employment }: { employment: EmploymentData }) {
  return (
    <Group justify='space-between' wrap='nowrap'>
      <EmploymentHistoryControlCompanyName employment={employment} />
      <EmploymentHistoryJobTitle employment={employment} classNames={[classes.employmentHistoryControlJobTitle, classes.employmentHistoryControlGroupChild]}/>
      <EmploymentHistoryShortJobDates employment={employment} classNames={[classes.employmentHistoryControlJobDates, classes.employmentHistoryControlGroupChild]} />
    </Group>
  )
}

function EmploymentHistoryControlCompanyName ({
  employment
}: {
  employment: EmploymentData
}) {
  return (
    <Box
      className={cx(
        classes.employmentHistoryControlCompanyName,
        classes.employmentHistoryControlGroupChild
      )}
    >
      <Title order={3}>
        {employment.companyName}&nbsp;
        <Anchor
          className={classes.employmentHistoryControlCompanyNameAnchor}
          inherit
          underline='never'
          target='_blank'
          href={employment.url}
        >
          <ExternalLinkIcon size={20}/>
        </Anchor>
      </Title>
    </Box>
  )
}

function EmploymentHistoryJobTitle ({
  employment,
  classNames,
}: {
  employment: EmploymentData,
  classNames?: string[]
}) {
  return (
    <Text
      className={cx(
        classes.employmentHistoryJobTitle,
        ...(classNames || [])
      )}
      span
    >
      {employment.positions[0].title}
    </Text>
  )
}

function EmploymentHistoryShortJobDates ({
  employment,
  classNames,
}: {
  employment: EmploymentData,
  classNames?: string[],
}) {
  const numPositions = employment.positions.length
  const endDate = employment.positions[0].endDate
  const startDate = employment.positions[numPositions - 1].startDate
  return (
    <Text
      className={cx(
        classes.employmentHistoryShortJobDates,
        ...(classNames || [])
      )}
      c='dimmed'
      span
    >
      {startDate} - {endDate}
    </Text>
  )
}
