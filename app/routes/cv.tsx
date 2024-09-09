import { json } from "@remix-run/node";
import {
  useLoaderData,
} from "@remix-run/react";
import { Title, Text } from '@mantine/core'
import { CV } from '~/components/CV'
import { loadCVData } from "~/data/CV";

export const loader = async () => {
  const cvData = loadCVData();
  return json({ cvData });
};

export default function Index () {
  const { cvData } = useLoaderData<typeof loader>();
  return (
    <Title ta='center' mt={100}>
      Welcome to{' '}
      <Text
        inherit
        variant='gradient'
        component='span'
        gradient={{ from: 'black', to: 'red' }}
      >
        Tom&apos;s CV
      </Text>
      <Text color='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        You can probably guess what&apos;s going to be here...
      </Text>
      <CV cvdata={cvData} />
    </Title>
  )
}
