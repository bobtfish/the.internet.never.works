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
        <li key={education.institution}>
            <EducationItem education={education} />
        </li>
    ))
}

export function Education ({ educationData }: EducationProps) {
  return (
    <div>
      <h2>Education</h2>
      <ul>
        <EducationList educationData={educationData} />
      </ul>
    </div>
  )
}
