import {
  capitalise,
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
} from '../index';

test('capitalise', () => {
  expect(capitalise('sean')).toBe('Sean');
  expect(capitalise('sean stocker')).toBe('Sean stocker');
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
