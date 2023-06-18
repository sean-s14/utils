/**
 * Capitalises the first letter of a string
 * @param {string} string
 * @return {string}
 */
export function capitalise(string: string): string {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

/**
 * Capitalises the first letter of every word in a string
 * @param {string} string
 * @return {string}
 */
export function capitaliseAll(string: string): string {
  return string.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
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
 * Generates a random string of lowercase alphabetic characters
 * @param {number} length
 * @return {string}
 */
export function randomString(length: number = 8): string {
  return Array.apply(0, Array(length))
    .map(function () {
      let chrs = 'abcdefghijklmnopqrstuvwxyz';
      let chrs_length = chrs.length;
      return chrs.charAt(Math.floor(Math.random() * chrs_length));
    })
    .join('');
}

/**
 * Generate a random color in hexadecimal form
 * @return {string}
 */
export function getRandomColor(): string {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6);
}

/**
 * Converts a hexadecimal string to an object containing integers r, g, and b
 * @param {string} hex
 * @return {object}
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | Error {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.repeat(2);
  }
  let match = hex.match(/[a-z0-9]{2}/gi);
  if (hex.length !== 6) {
    match = null;
  }
  if (match === null) {
    throw new Error('Not a valid hex value');
  }
  return {
    r: parseInt(match[0], 16),
    g: parseInt(match[1], 16),
    b: parseInt(match[2], 16),
  };
}

/**
 * Converts an rgb value to its corresponding hexadecimal value
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {string}
 */
export function rgbToHex(r: number, g: number, b: number): string | Error {
  for (const val of [r, g, b]) {
    if (val < 0 || val > 255) {
      throw new Error('Value must be between 0 and 255');
    }
  }
  return (
    '#' +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  );
}

/**
 * Determines if the input is a valid date
 * @param {any} date
 * @return {boolean}
 */
export function isDateValid(date: any): boolean {
  if (typeof date === 'object' && date !== null && Object.prototype.toString.call(date) === '[object Date]') {
    return !Number.isNaN(date.getTime());
  }
  return false;
}

/**
 * Logs the speed of a given function and returns the result
 * @param {function} fn
 * @param {any} args
 * @return {any}
 */
export function speedTest(fn: (...args: any) => any, ...args: any): any {
  if (typeof fn !== 'function') {
    console.error(`Provide a valid function, ${typeof fn} provided`);
    return;
  }
  console.time(fn.name);
  const result = fn(...args);
  console.timeEnd(fn.name);
  return result;
}

/**
 * Returns the unslugified version of slugified string
 * @param {string} str
 * @return {string}
 */
export function unslugify(str: string): string {
  return str
    .replace(/-/g, ' ') // replace all hyphens with spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize first letter of each word
}

/**
 * Splits a given string based on any occurrence of an uppercase letter and returns the concatenated result as a string, with each split segment separated by a space.
 * @param {string} str
 * @return {string}
 */
export function splitOnUpper(str: string): string {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toUpperCase() && i > 0) {
      result += ' ';
    }
    result += char;
  }
  return result;
}
