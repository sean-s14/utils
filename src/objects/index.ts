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
 * Converts all falsy values from an object (including nested objects) to a target value
 * @param {object} obj
 * @param {any} target
 * @return {object}
 * @example convertFalsyValues({ a: 1, b: 0, c: false, d: null, e: undefined, f: '', g: [], h: {} }, 'a') => { a: 1, b: 'a', c: 'a', d: 'a', e: 'a', f: 'a', g: 'a', h: 'a' }
 */
export function convertFalsyValues(obj: any, target: any): {} {
  const newObj: any = {};

  Object.keys(obj).forEach((prop) => {
    const value = obj[prop];
    if (Array.isArray(value)) {
      if (value.length > 0) {
        newObj[prop] = value;
      } else {
        newObj[prop] = target;
      }
    } else if (typeof value === 'object' && value !== null) {
      const newValue = convertFalsyValues(value, target);
      if (Object.keys(newValue).length !== 0) {
        newObj[prop] = convertFalsyValues(value, target);
      } else {
        newObj[prop] = target;
      }
    } else if (value) {
      newObj[prop] = value;
    } else {
      newObj[prop] = target;
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

/**
 * Recusrively merges two objects
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 * @example deepMergeObjects({ a: 1, b: { c: 2 } }, { b: { d: 3 } }) => { a: 1, b: { c: 2, d: 3 } }
 */
export function deepMergeObjects(
  obj1: { [key: string | number | symbol]: any },
  obj2: { [key: string | number | symbol]: any },
): { [key: string | number | symbol]: any } {
  const result: any = { ...obj1 };

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
        if (typeof result[key] !== 'object' || result[key] === null || Array.isArray(result[key])) {
          result[key] = {} as any;
        }
        result[key] = deepMergeObjects(result[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  return result;
}
