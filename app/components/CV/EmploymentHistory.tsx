import { MarkdownString } from '~/components'
import type { Employment as EmploymentData } from '~/data/CV'

export type EmploymentHistoryProps = {
  employmentHistoryData: EmploymentData[]
}

function EmploymentDates ({ employment }: { employment: EmploymentData }) {
  const numPositions = employment.positions.length
  const endDate = employment.positions[0].endDate
  const startDate = employment.positions[numPositions-1].startDate
  if (numPositions == 1) {
    return (
      <div>{startDate} - {endDate}: {employment.positions[0].title}</div>
    )
  }
  return (
    <div>
      <div>{startDate} - {endDate}</div>
      <ul>
        {employment.positions.map(position => (
          <li key={position.title}>{position.startDate} - {position.endDate}: {position.title}</li>
        ))}
      </ul>
    </div>
  )
}
function EmploymentItem ({ employment }: { employment: EmploymentData }) {
  return (
    <div>
      <h3><a href={employment.url}>{employment.companyName}</a></h3>
      <EmploymentDates employment={employment} />
      <h4>Accomplishments:</h4>
      <ul className="accomplishments">
        {employment.accomplishments.map((accomplishment, idx) => (
          <li key={idx}>
            <MarkdownString markdown={accomplishment.description} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function EmploymentHistoryList ({
  employmentHistoryData
}: EmploymentHistoryProps) {
  return employmentHistoryData.map(employment => (
    <li key={employment.companyName}>
      <EmploymentItem employment={employment} />
    </li>
  ))
}

export function EmploymentHistory ({
  employmentHistoryData
}: EmploymentHistoryProps) {
  return (
    <div>
      <h2>Employment History</h2>
      <ul>
        <EmploymentHistoryList employmentHistoryData={employmentHistoryData} />
      </ul>
    </div>
  )
}
