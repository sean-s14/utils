/**
 * Capitalises the first letter of a string
 * @param {string} str
 * @return {string}
 */
export function capitalise(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
