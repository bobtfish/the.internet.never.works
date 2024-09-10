import { NotFound } from '~/components';

export function loader() {
  return new Response("Not Found", {
    status: 404,
  });
}


export default function NotFoundPage() {
  return <NotFound />;
}
