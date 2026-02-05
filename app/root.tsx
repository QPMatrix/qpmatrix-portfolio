import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'react-router';
import ThemeProvider from './libs/theme/ThemeProvider';
import type { Route } from './+types/root';
import { getTheme } from './libs/theme/theme.server';
import type { ReactNode } from 'react';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { styled } from '@mui/material';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ theme: import('@mui/material').PaletteMode | null }> => {
  const theme = await getTheme(request);
  return { theme };
};

/**
 * Main Layout component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @param {object} [props.loaderData] - The loader data containing the theme.
 * @returns {ReactNode} The layout component.
 */
export function Layout({ children }: { children: ReactNode }): ReactNode {
  const data = useLoaderData<typeof loader>();
  const theme = data?.theme || 'dark';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const AppContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const MainContent = styled('div')({
  flex: 1,
});

/**
 *
 */
export default function App(): ReactNode {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

/**
 *
 * @param root0
 * @param root0.error
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps): ReactNode {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
