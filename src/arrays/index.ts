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
 * Counts the number of occurrences of a particular value in an array
 * @param {Array} array
 * @param {any} val
 * @return {any}
 */
export function count(array: any[], val: any): any[] {
  return array.reduce((a, v) => (v === val ? a + 1 : a), 0);
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
 * @param {number} start
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
 * Shuffles an array in-place
 * @param {Array} array
 */
export function shuffleInPlace<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * Sorts and returns a new array
 * @param {Array} array
 * @param {string} order
 * @return {Array}
 */
export function sort(array: any[], order: 'asc' | 'desc' = 'asc'): any[] {
  return array.sort((a, b) => (order === 'asc' ? a - b : b - a));
}

/**
 * Returns the union of two arrays.
 *
 * The union contains unique values that are present in either array.
 *
 * @param {array} a - The first array.
 * @param {array} b - The second array.
 * @returns {array} - The union of a and b.
 *
 * @example
 *
 * union([1, 2, 3], [3, 4, 5]) // [1, 2, 3, 4, 5]
 *
 */
export function union(a: any[], b: any[]): any[] {
  // Create a Set to store unique values
  let unionSet = new Set(a);

  // Add values from second array to Set
  for (let elem of b) {
    unionSet.add(elem);
  }

  // Return union as array
  return Array.from(unionSet);
}
