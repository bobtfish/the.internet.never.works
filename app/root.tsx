import '@mantine/core/styles.css'

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse
} from '@remix-run/react'
import {
  CSSVariablesResolver,
  ColorSchemeScript,
  ConvertCSSVariablesInput,
  MantineProvider,
  createTheme
} from '@mantine/core'

import { Shell } from '~/components/Shell'
import { useNotFoundRootStyleVariables } from '~/components/NotFound'

const theme = createTheme({})

export function Layout ({ children }: { children: React.ReactNode }) {
  const notFoundVariables = useNotFoundRootStyleVariables()
  const resolver: CSSVariablesResolver = _theme => {
    const out: ConvertCSSVariablesInput = {
      variables: notFoundVariables,
      dark: {},
      light: {}
    }
    return out
  }
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          <Shell>{children}</Shell>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary () {
  const error = useRouteError()
  return (
    <html lang='en'>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : error instanceof Error
            ? error.message
            : 'Unknown Error'}
        </h1>
        <Scripts />
      </body>
    </html>
  )
}

export default function App () {
  return <Outlet />
}
