import type { OpenSourceProject as OpenSourceProjectData } from '~/data/CV'

export type OpenSourceHistoryProps = {
  openSourceProjectsData: OpenSourceProjectData[]
}

function OpenSourceProjectsList ({
      openSourceProjectsData
    }: OpenSourceHistoryProps) {
      return openSourceProjectsData.map(openSourceProject => (
        <li key={openSourceProject.name}>{openSourceProject.name}</li>  
      ))
    }

export function OpenSourceProjects ({
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  openSourceProjectsData
}: OpenSourceHistoryProps) {
  return (
    <div>
      <h2>Open Source Projects</h2>
      <ul>
        <OpenSourceProjectsList openSourceProjectsData={openSourceProjectsData} />
      </ul>
    </div>
  )
}
