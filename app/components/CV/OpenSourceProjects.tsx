import { Title, List, Anchor, Box } from '@mantine/core'
import { MarkdownString } from '~/components'
import classes from './CV.module.css'

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
      <Anchor className={classes.anchor} href={project.url}>{project.name}</Anchor> <MarkdownString classNames={{anchor: classes.anchor}} markdown={project.description} /> ({project.languages})
    </>
  )
}

function OpenSourceProjectsList ({
      openSourceProjectsData
    }: OpenSourceHistoryProps) {
      return openSourceProjectsData.map(openSourceProject => (
        <List.Item key={openSourceProject.name}><OpenSourceProjectItem project={openSourceProject} /></List.Item>
      ))
    }

export function OpenSourceProjects ({
  openSourceProjectsData,
}: OpenSourceHistoryProps) {
  return (
    <Box>
      <Title order={2}>Open Source Projects</Title>
      <List>
        <OpenSourceProjectsList openSourceProjectsData={openSourceProjectsData} />
      </List>
    </Box>
  )
}
