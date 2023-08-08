import { capitalise, capitaliseAll, randomString, unslugify, splitOnUpper, isPalindrome } from './strings/index';

import {
  getRandomItem,
  removeDuplicates,
  sortBy,
  count,
  pluck,
  insert,
  sum,
  generateArray,
  sort,
  union,
} from './arrays/index';

export {
  capitalise,
  capitaliseAll,
  randomString,
  unslugify,
  splitOnUpper,
  isPalindrome,
  getRandomItem,
  removeDuplicates,
  sortBy,
  count,
  pluck,
  insert,
  sum,
  generateArray,
  sort,
  union,
};

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
 * Returns a promise which resolves after a specified amount of time
 * @param {number} milliseconds
 * @return {Promise}
 */
export async function wait<T>(milliseconds: number): Promise<T> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * Generate a random color in hexadecimal form
 * @return {string}
 */
export function getRandomColor(): string {
  return '#' + ((Math.random() * 0xffffff) | 0).toString(16).padStart(6, '0');
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
