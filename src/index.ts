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
 * Removes all duplicates from an array.
 * Uses Set data structure to filter out duplicates.
 * @param {Array}
 * @return {Array}
 */
export function removeDuplicates<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * Sort a list of objects based on the value of a specified key
 * @param {Array} arr
 * @param {any} key
 * @return {Array}
 */
export function sortBy<T>(arr: T[], key: keyof T): T[] {
  return arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
}

/**
 * Checks for equality between two values.
 * Especially helpful for arrays and objects.
 * The order of the values in an object is relevant.
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
export function isEqual(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * Counts the number of occurrences of a particular value in an array
 * @param {Array} arr
 * @param {any} val
 */
export function count(arr: any[], val: any): any[] {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}
