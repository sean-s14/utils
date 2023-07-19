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

/**
 * Checks if a given string is a palindrome.
 *
 * A palindrome is a string that is spelled the same forwards and backwards.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str: string): boolean {
  // Convert string to lowercase and remove non-alphanumeric characters
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if string is equal to reversed string
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
