import type { ActionFunctionArgs } from 'react-router';
import { redirect } from 'react-router';
import { setTheme } from '~/libs/theme/theme.server';
import type { PaletteMode } from '@mui/material';

export const action = async ({ request }: ActionFunctionArgs): Promise<Response> => {
  const formData = await request.formData();
  const themeMode = formData.get('themeMode');

  if (themeMode === 'light' || themeMode === 'dark') {
    return redirect(request.headers.get('Referer') || '/', {
      headers: {
        'Set-Cookie': await setTheme(themeMode as PaletteMode),
      },
    });
  }

  return redirect(request.headers.get('Referer') || '/');
};
