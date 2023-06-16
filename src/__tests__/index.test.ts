import {
  capitalise,
  capitaliseAll,
  calculatePercent,
  getRandomItem,
  removeDuplicates,
  sortBy,
  isEqual,
  count,
  wait,
  pluck,
  insert,
  sum,
  generateArray,
  sort,
  randomString,
  getRandomColor,
  hexToRgb,
  rgbToHex,
  isDateValid,
  speedTest,
  unslugify,
} from '../index';

test('capitalise', () => {
  expect(capitalise('sean')).toBe('Sean');
  expect(capitalise('sean stocker')).toBe('Sean stocker');
});

test('capitaliseAll', () => {
  expect(capitaliseAll('sean')).toBe('Sean');
  expect(capitaliseAll('sean stocker')).toBe('Sean Stocker');
});

test('calculatePercent', () => {
  expect(calculatePercent(3, 15)).toBe(20);
  expect(calculatePercent(23, 46)).toBe(50);
});

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

test('isEqual', () => {
  let arr1 = [4, '4', 8];
  let arr2 = [4, 4, 8];
  let obj1 = { name: 'Michael', age: 26 };
  let obj2 = { name: 'Michael', age: 26 };
  let obj3 = { age: 26, name: 'Michael' };
  expect(isEqual(arr1, arr2)).toBe(false);
  expect(isEqual(obj1, obj2)).toBe(true);
  expect(isEqual(obj1, obj3)).toBe(false);
});

test('count', () => {
  let arr = [1, 1, 2, 3, 4, 4, 5];
  expect(count(arr, 3)).toBe(1);
  expect(count(arr, 4)).toBe(2);
});

test('wait', () => {
  expect(wait(500).then(() => 500)).resolves.toBe(500);
  expect(wait(1000).then(() => 1000)).resolves.toBe(1000);
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

test('randomString', () => {
  expect(typeof randomString()).toBe('string');
  expect(randomString().length).toBe(8);
  expect(randomString(1).length).toBe(1);
  expect(randomString(100).length).toBe(100);
});

test('getRandomColor', () => {
  expect(getRandomColor()).toEqual(expect.stringMatching(/#[a-z0-9]{6}/i));
});

test('hexToRgb', () => {
  expect(hexToRgb('#123456')).toStrictEqual({ r: 18, g: 52, b: 86 });
  expect(hexToRgb('#333')).toStrictEqual({ r: 51, g: 51, b: 51 });
  expect(() => hexToRgb('#3333')).toThrowError(new Error('Not a valid hex value'));
});

test('rgbToHex', () => {
  expect(rgbToHex(0, 0, 0)).toBe('#000000');
  expect(rgbToHex(255, 255, 255)).toBe('#FFFFFF');
  expect(rgbToHex(127, 127, 127)).toBe('#7F7F7F');
  expect(() => rgbToHex(256, 255, 255)).toThrowError(new Error('Value must be between 0 and 255'));
  expect(() => rgbToHex(-1, 255, 255)).toThrowError(new Error('Value must be between 0 and 255'));
});

test('isDateValid', () => {
  expect(isDateValid(new Date())).toBe(true);
  expect(isDateValid(new Date('2023-01-01'))).toBe(true);
  expect(isDateValid(new Date('invalid date'))).toBe(false);
  expect(isDateValid(0)).toBe(false);
  expect(isDateValid('invalid date')).toBe(false);
});

test('speedTest', () => {
  expect(speedTest(() => null)).toBe(null);
  expect(speedTest((x, y) => x + y, 1, 2)).toBe(3);
});

test('unslugify', () => {
  expect(unslugify('a-title')).toBe('A Title');
  expect(unslugify('three-words-here')).toBe('Three Words Here');
});
