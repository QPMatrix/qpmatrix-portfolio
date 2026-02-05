import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('api/theme', 'routes/api/theme.ts'),
] satisfies RouteConfig;
