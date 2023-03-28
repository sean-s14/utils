/**
 * Capitalises the first letter of a string
 * @param {string} string
 * @return {string}
 */
export function capitalise(string: string): string {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
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
export function removeDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

/**
 * Sort a list of objects based on the value of a specified key
 * @param {Array} array
 * @param {any} key
 * @return {Array}
 */
export function sortBy<T>(array: T[], key: keyof T): T[] {
  return array.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
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
 * @param {Array} array
 * @param {any} val
 * @return {any}
 */
export function count(array: any[], val: any): any[] {
  return array.reduce((a, v) => (v === val ? a + 1 : a), 0);
}

/**
 * Returns a promise which resolves after a specified amount of time
 * @param {number} milliseconds
 * @return {Promise}
 */
export async function wait<T>(milliseconds: number): Promise<T> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * Returns an array with only the values of the property that was specified
 * @param {Array} objs
 * @param {string} key
 * @return {Array}
 */
export function pluck<T>(objs: T[], key: keyof T): T[typeof key][] {
  return objs.map((obj) => obj[key]);
}

/**
 * An alternative to "splice" which does not mutate the original array
 * @param {Array} array
 * @param {number} index
 * @param {any} newItem
 * @return {Array}
 */
export function insert(array: any[], index: number, newItem: any): any[] {
  return [...array.slice(0, index), newItem, ...array.slice(index)];
}

/**
 * Returns the sum of all numbers in the input array
 * @param {Array} array
 * @return {number}
 */
export function sum(array: number[]): number {
  return array.reduce((a, b) => a + b, 0);
}

/**
 * Generates an array of numbers starting from 0 up to (but not including) the number specified
 * @param {number} count
 * @return {Array}
 */
export function generateArray(count: number, start: number = 0): number[] {
  return Array.from(Array(count).keys()).map((i) => i + start);
}

/**
 * Shuffles the elements of within an array in-place
 * @param {Array} array
 * @return {Array}
 */
export function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * Sorts and returns a new array
 * @param {Array} array
 * @return {Array}
 */
export function sortAsc(array: any[]): any[] {
  return array.sort((a, b) => a - b);
}
