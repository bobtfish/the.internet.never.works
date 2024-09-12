import { Title } from '@mantine/core'
import { MarkdownString } from '~/components'
import type { OpenSourceProject as OpenSourceProjectData } from '~/data/CV'

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
  openSourceProjectsData,
}: OpenSourceHistoryProps) {
  return (
    <>
      <Title order={2}>Open Source Projects</Title>
      <ul>
        <OpenSourceProjectsList openSourceProjectsData={openSourceProjectsData} />
      </ul>
    </>
  )
}
