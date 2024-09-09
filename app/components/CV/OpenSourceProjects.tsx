import type { OpenSourceProject as OpenSourceProjectData } from '~/data/CV'

import { MarkdownString } from '../Markdown'

export type OpenSourceHistoryProps = {
  openSourceProjectsData: OpenSourceProjectData[]
}

function OpenSourceProjectItem({
  project
}: {
  project: OpenSourceProjectData
}) {
  return (
    <>
      <a href={project.url}>{project.name}</a> <MarkdownString markdown={project.description} /> ({project.languages})
    </>
  )
}

function OpenSourceProjectsList ({
      openSourceProjectsData
    }: OpenSourceHistoryProps) {
      return openSourceProjectsData.map(openSourceProject => (
        <li key={openSourceProject.name}><OpenSourceProjectItem project={openSourceProject} /></li>
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
