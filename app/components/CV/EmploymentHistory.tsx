import type { Employment as EmploymentData } from '~/data/CV'

export type EmploymentHistoryProps = {
  employmentHistoryData: EmploymentData[]
}

function EmploymentItem ({ employment }: { employment: EmploymentData }) {
  return (
    <div>
      <h3>{employment.companyName}</h3>
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
