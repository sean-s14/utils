import { capitalise, calculatePercent, getRandomItem, removeDuplicates, sortBy, isEqual, count, wait } from '../index';

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
