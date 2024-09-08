import type { MetaFunction } from '@remix-run/node'
import { Welcome } from "~/components/Welcome/Welcome";

export const meta: MetaFunction = () => {
  return [
    { title: 'The Internet Never Works' },
    { name: 'description', content: "Tomas Doran's homepage" }
  ]
}

export default function Index () {
  return (
    <Welcome />
  )
}
