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
import { styled, Typography, Box } from '@mui/material';
import { QPContainer, QPTitle } from '~/components/ui';

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

const AppWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  color: theme.palette.text.primary,
}));

const MainContent = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

/**
 * The main application component.
 *
 * @returns {ReactNode} The rendered application.
 */
export default function App(): ReactNode {
  return (
    <AppWrapper>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </AppWrapper>
  );
}

/**
 * The global Error Boundary.
 *
 * @param {Route.ErrorBoundaryProps} props - The component props.
 * @param {unknown} props.error - The error object.
 * @returns {ReactNode} The error page.
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
    <QPContainer component="main">
      <QPTitle variant="h1">{message}</QPTitle>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        {details}
      </Typography>
      {stack && (
        <Box
          component="pre"
          sx={{
            width: '100%',
            p: 4,
            overflowX: 'auto',
            bgcolor: 'background.paper',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <code>{stack}</code>
        </Box>
      )}
    </QPContainer>
  );
}
