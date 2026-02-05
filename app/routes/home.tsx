import { Button } from '@mui/material';
import type { Route } from './+types/home';
import type { ReactNode } from 'react';

/**
 * Meta tags for the home page.
 * @param _
 */
export function meta(_: Route.MetaArgs) {
  return [{ title: 'QPMatrix' }, { name: 'description', content: 'Welcome to QPMatrix!' }];
}

/**
 * Home page.
 * @returns {ReactNode} The home page.
 */
export default function Home(): ReactNode {
  return <Button variant="contained">Hello world</Button>;
}
