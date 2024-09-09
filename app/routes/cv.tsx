import { json } from "@remix-run/node";
import {
  useLoaderData,
} from "@remix-run/react";
import { CV } from '~/components/CV'
import { loadCVData } from "~/data/CV";

export const loader = async () => {
  const cvData = loadCVData();
  return json({ cvData });
};

export default function Index () {
  const { cvData } = useLoaderData<typeof loader>();
  return (
      <CV cvdata={cvData} />
  )
}
