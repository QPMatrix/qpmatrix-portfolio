import type { ReactNode } from 'react';
import type { Route } from './+types/landing';
import { QPContainer } from '~/components/ui';
import HeroSections from './components/HeroSections';

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
  return <QPContainer>
    <HeroSections/>
  </QPContainer>
}
