/**
 * Capitalises the first letter of a string
 * @param {string} str
 * @return {string}
 */
export function capitalise(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

/**
 * Calculates the percentage given a value and a total
 * @param {number} value
 * @param {number} total
 * @return {number}
 */
export function calculatePercent(value: number, total: number): number {
  return Math.round((value / total) * 100);
}

/**
 * Return a randomly selected item from an array
 * @param {Array}
 * @return {any}
 */
export function getRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Removes all duplicates from an array
 * @param {Array}
 * @return {any}
 */
export function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
