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
import classes from './EmploymentHistory.module.css'
import type { Employment as EmploymentData } from '~/data/CV'

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
  if (numPositions == 1) return
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
      <EmploymentFullDates employment={employment} />
      <EmploymentAccomplishments employment={employment} />
    </>
  )
}

export function EmploymentHistory ({
  employmentHistoryData,
  style
}: EmploymentHistoryProps & {style: React.CSSProperties}) {
  const employmentHistoryList = employmentHistoryData.map(employment => (
    <Accordion.Item key={employment.companyName} value={employment.companyName}>
      <Accordion.Control>
        <EmploymentControl employment={employment} />
      </Accordion.Control>
      <Accordion.Panel>
        <EmploymentItem employment={employment} />
      </Accordion.Panel>
    </Accordion.Item>
  ))
  return (
    <Box style={style}>
      <Title order={2}>Employment History</Title>
      <Accordion
        chevronPosition='left'
        variant='subtle'
        multiple
        classNames={classes}
      >
        {employmentHistoryList}
      </Accordion>
    </Box>
  )
}

function EmploymentControl ({ employment }: { employment: EmploymentData }) {
  return (
    <Group justify='space-between' wrap='nowrap'>
      <EmploymentControlCompanyName employment={employment} />
      <EmploymentControlJobTitle employment={employment} />
      <EmploymentControlJobDates employment={employment} />
    </Group>
  )
}

function EmploymentControlCompanyName ({
  employment
}: {
  employment: EmploymentData
}) {
  return (
    <Box
      className={cx(
        classes.employmentControlCompanyName,
        classes.employmentControlGroupChild
      )}
    >
      <Title order={3}>
        <Anchor
          className={classes.employmentControlCompanyNameAnchor}
          inherit
          underline='hover'
          href={employment.url}
        >
          {employment.companyName}
        </Anchor>
      </Title>
    </Box>
  )
}

function EmploymentControlJobTitle ({
  employment
}: {
  employment: EmploymentData
}) {
  return (
    <Text
      className={cx(
        classes.employmentControlJobTitle,
        classes.employmentControlGroupChild
      )}
      span
    >
      {employment.positions[0].title}
    </Text>
  )
}

function EmploymentControlJobDates ({
  employment
}: {
  employment: EmploymentData
}) {
  const numPositions = employment.positions.length
  const endDate = employment.positions[0].endDate
  const startDate = employment.positions[numPositions - 1].startDate
  return (
    <Text
      className={cx(
        classes.employmentControlJobDates,
        classes.employmentControlGroupChild
      )}
      c='dimmed'
      span
    >
      {startDate} - {endDate}
    </Text>
  )
}
