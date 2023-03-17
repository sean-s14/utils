import { capitalise, calculatePercent, getRandomItem, removeDuplicates } from '../index';

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