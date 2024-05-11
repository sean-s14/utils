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
  flatten,
  union,
  intersection,
  compact,
  difference,
  isArrayOfType,
} from './index';

test('getRandomItem', () => {
  let numArr = [4, 6, 7];
  let strArr = ['Mike', 'Lily', 'Jason', 'Cassy'];
  expect(getRandomItem(numArr)).toBeGreaterThan(3);
  expect(getRandomItem(numArr)).toBeLessThan(8);
  expect(getRandomItem(strArr).length).toBeGreaterThan(3);
  expect(getRandomItem(strArr).length).toBeLessThan(6);
});

test('removeDuplicates', () => {
  let numArr = [4, 4, 5, 6, 7, 7, 8];
  let strArr = ['Mike', 'Lily', 'Mike', 'Cassy'];
  expect(removeDuplicates(numArr)).toStrictEqual([4, 5, 6, 7, 8]);
  expect(removeDuplicates(strArr)).toStrictEqual(['Mike', 'Lily', 'Cassy']);
});

test('sortBy', () => {
  let list = [
    { name: 'Daniel', age: 23 },
    { name: 'Samantha', age: 19 },
    { name: 'Jason', age: 22 },
  ];
  let listSortedByName = [
    { name: 'Daniel', age: 23 },
    { name: 'Jason', age: 22 },
    { name: 'Samantha', age: 19 },
  ];
  let listSortedByAge = [
    { name: 'Samantha', age: 19 },
    { name: 'Jason', age: 22 },
    { name: 'Daniel', age: 23 },
  ];
  expect(sortBy(list, 'name')).toStrictEqual(listSortedByName);
  expect(sortBy(list, 'age')).toStrictEqual(listSortedByAge);
});

test('count', () => {
  let arr = [1, 1, 2, 3, 4, 4, 5];
  expect(count(arr, 3)).toBe(1);
  expect(count(arr, 4)).toBe(2);
});

test('pluck', () => {
  const arr = [
    { name: 'William', age: 27 },
    { name: 'Lucy', age: 24 },
  ];
  expect(pluck(arr, 'name')).toStrictEqual(['William', 'Lucy']);
  expect(pluck(arr, 'age')).toStrictEqual([27, 24]);
});

test('insert', () => {
  const arr = [1, 4];
  expect(insert(arr, 1, 2)).toStrictEqual([1, 2, 4]);
  expect(insert(arr, 2, 5)).toStrictEqual([1, 4, 5]);
});

test('sum', () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, -2, 3, 4];
  expect(sum(arr1)).toBe(10);
  expect(sum(arr2)).toBe(6);
});

test('generateArray', () => {
  expect(generateArray(5)).toStrictEqual([0, 1, 2, 3, 4]);
  expect(generateArray(7)).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
  expect(generateArray(3, 7)).toStrictEqual([7, 8, 9]);
});

test('sort', () => {
  const arr1 = [1, -2, 3, 4];
  const arr2 = [54, -2, 7, 0];
  expect(sort(arr1)).toStrictEqual([-2, 1, 3, 4]);
  expect(sort(arr2)).toStrictEqual([-2, 0, 7, 54]);
  expect(sort(arr1, 'asc')).toStrictEqual([-2, 1, 3, 4]);
  expect(sort(arr1, 'desc')).toStrictEqual([4, 3, 1, -2]);
  expect(sort(arr2, 'desc')).toStrictEqual([54, 7, 0, -2]);
});

describe('flatten', () => {
  test('flattens a single level array', () => {
    expect(flatten([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
  });

  test('flattens a multi-level nested array', () => {
    expect(flatten([1, [2, [3, [4]]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('flattens an empty array', () => {
    expect(flatten([])).toEqual([]);
  });
});

test('union', () => {
  expect(union([1, 2, 3], [3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(union([1, 2, 3], [3, 4, 5, 6, 7])).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(union(['a', 'b', 'c'], ['c', 'd', 'e'])).toStrictEqual(['a', 'b', 'c', 'd', 'e']);
});

test('intersection', () => {
  expect(intersection([1, 2, 3], [3, 4, 5])).toStrictEqual([3]);
  expect(intersection([1, 2, 3], [2, 3, 4, 5, 6, 7])).toStrictEqual([2, 3]);
  expect(intersection(['a', 'b', 'c'], ['c', 'd', 'e'])).toStrictEqual(['c']);
});

test('compact', () => {
  expect(compact([0, 1, false, 2, '', 3])).toStrictEqual([1, 2, 3]);
  expect(compact([0, 1, false, 2, '', 3, null, undefined])).toStrictEqual([1, 2, 3]);
  expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toStrictEqual([1, 2, 3]);
});

test('difference', () => {
  expect(difference([1, 2, 3], [3, 4, 5])).toStrictEqual([1, 2]);
  expect(difference([1, 2, 3], [2, 3, 4, 5, 6, 7])).toStrictEqual([1]);
  expect(difference(['a', 'b', 'c'], ['c', 'd', 'e'])).toStrictEqual(['a', 'b']);
});

test('isArrayOfType', () => {
  // Test arrays of strings
  expect(isArrayOfType(['apple', 'banana', 'orange'], 'string')).toBe(true);
  expect(isArrayOfType(['apple', 123, 'orange'], 'string')).toBe(false); // Not all strings
  expect(isArrayOfType([], 'string')).toBe(true); // Empty array

  // Test arrays of numbers
  expect(isArrayOfType([1, 2, 3], 'number')).toBe(true);
  expect(isArrayOfType([1, '2', 3], 'number')).toBe(false); // Not all numbers
  expect(isArrayOfType([], 'number')).toBe(true); // Empty array

  // Test arrays of objects
  expect(isArrayOfType([{ name: 'John' }, { name: 'Jane' }], 'object')).toBe(true);
  expect(isArrayOfType([{ name: 'John' }, 'Jane'], 'object')).toBe(false); // Not all objects
  expect(isArrayOfType([], 'object')).toBe(true); // Empty array

  // Test arrays of booleans
  expect(isArrayOfType([true, false, true], 'boolean')).toBe(true);
  expect(isArrayOfType([true, false, 1], 'boolean')).toBe(false); // Not all booleans
  expect(isArrayOfType([], 'boolean')).toBe(true); // Empty array

  // Test arrays of functions
  const func1 = () => {};
  const func2 = () => {};
  expect(isArrayOfType([func1, func2], 'function')).toBe(true);
  expect(isArrayOfType([func1, 123], 'function')).toBe(false); // Not all functions
  expect(isArrayOfType([], 'function')).toBe(true); // Empty array

  // Test arrays of undefined
  expect(isArrayOfType([undefined, undefined, undefined], 'undefined')).toBe(true);
  expect(isArrayOfType([undefined, null, undefined], 'undefined')).toBe(false); // Not all undefined
  expect(isArrayOfType([], 'undefined')).toBe(true); // Empty array
});
