/**
 * Removes all falsy values from an object (including nested objects)
 * @param {object} obj
 * @return {object}
 * @example cleanObject({ a: 1, b: 0, c: false, d: null, e: undefined, f: '', g: [], h: {} }) => { a: 1 }
 */
export function cleanObject(obj: any): {} {
  const newObj: any = {};

  Object.keys(obj).forEach((prop) => {
    const value = obj[prop];
    if (Array.isArray(value)) {
      if (value.length > 0) {
        newObj[prop] = value;
      }
    } else if (typeof value === 'object' && value !== null) {
      const newValue = cleanObject(value);
      if (Object.keys(newValue).length !== 0) {
        newObj[prop] = cleanObject(value);
      }
    } else if (value) {
      newObj[prop] = value;
    }
  });

  return newObj;
}

/**
 *  Returns a boolean indicating whether the passed value is a plain object.
 * @param {any} value
 * @return {boolean}
 * @example isPlainObject({}) // true
 * @example isPlainObject([]) // false
 */
export function isPlainObject(value: any): boolean {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Function);
}
