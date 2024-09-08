import '@mantine/core/styles.css';

import {
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload
} from "@remix-run/react";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
 } from '@mantine/core';

 import {Shell} from "~/components/Shell";


const theme = createTheme({});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Shell>
            <div>
              <div id='sidebar'>
                <ul>
                <li><Link to="/cv">cv</Link></li>
                </ul>
              </div>
              <div id='detail'>
              {children}
              </div>
            </div>
          </Shell>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
