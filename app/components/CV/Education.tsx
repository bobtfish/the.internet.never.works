import { Title, List, Box } from '@mantine/core'
import type { Education as EducationData } from '~/data/CV'

export type EducationProps = {
  educationData: EducationData[]
}

function EducationItem({ education }: { education: EducationData }) {
    return (
        <>{education.startDate} - {education.endDate} {education.institution} - {education.description}</>
    )
}

export function EducationList ({ educationData }: EducationProps) {
    return educationData.map(education => (
        <List.Item key={education.institution}>
            <EducationItem education={education} />
        </List.Item>
    ))
}

export function Education ({ educationData }: EducationProps) {
  return (
    <>
      <Title order={2}>Education</Title>
      <List pb='var(--mantine-spacing-lg)'>
        <EducationList educationData={educationData} />
      </List>
    </>
  )
}
