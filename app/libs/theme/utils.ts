/**
 * Converts pixels to rem.
 * Assumes a base font size of 16px.
 * @param {number} px - The pixel value.
 * @returns {string} The value in rem.
 */
export const pxToRem = (px: number): string => `${px / 16}rem`;

/**
 * Converts pixels to em.
 * Assumes a base font size of 16px.
 * @param {number} px - The pixel value.
 * @returns {string} The value in em.
 */
export const pxToEm = (px: number): string => `${px / 16}em`;
