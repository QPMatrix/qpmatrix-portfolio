import createCache from '@emotion/cache';
import type { EmotionCache } from '@emotion/react';

/**
 * Creates an emotion cache.
 * @returns {EmotionCache} The emotion cache.
 */
export default function createEmotionCache(): EmotionCache {
  return createCache({ key: 'css' });
}
