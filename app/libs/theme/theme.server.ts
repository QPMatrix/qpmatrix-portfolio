import { createCookie } from 'react-router';
import type { PaletteMode } from '@mui/material';

const themeCookie = createCookie('themeMode', {
  maxAge: 604_800, // one week
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
});

export const getTheme = async (request: Request): Promise<PaletteMode | null> => {
  const cookieHeader = request.headers.get('Cookie');
  const theme = await themeCookie.parse(cookieHeader);
  if (theme === 'light' || theme === 'dark') {
    return theme;
  }
  return null;
};

export const setTheme = async (theme: PaletteMode): Promise<string> => {
  const cookie = await themeCookie.serialize(theme);
  return cookie;
};
