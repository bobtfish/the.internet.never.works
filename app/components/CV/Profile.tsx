import { Title } from "@mantine/core";
import {
    MarkdownParagraph,
  } from '~/components'
  import classes from './CV.module.css'

export  function Profile ({ profile }: { profile: string }) {
    return (
      <>
        <Title order={2}>Profile</Title>
        <MarkdownParagraph
          classNames={{ anchor: classes.anchor }}
          markdown={profile}
        />
      </>
    )
  }