import { capitalise, capitaliseAll, randomString, unslugify, splitOnUpper, isPalindrome } from './index';

test('capitalise', () => {
  expect(capitalise('sean')).toBe('Sean');
  expect(capitalise('sean stocker')).toBe('Sean stocker');
});

test('capitaliseAll', () => {
  expect(capitaliseAll('sean')).toBe('Sean');
  expect(capitaliseAll('sean stocker')).toBe('Sean Stocker');
});

test('randomString', () => {
  expect(typeof randomString()).toBe('string');
  expect(randomString().length).toBe(8);
  expect(randomString(1).length).toBe(1);
  expect(randomString(100).length).toBe(100);
});

test('unslugify', () => {
  expect(unslugify('a-title')).toBe('A Title');
  expect(unslugify('three-words-here')).toBe('Three Words Here');
});

test('splitOnUpper', () => {
  expect(splitOnUpper('splitOnUpper')).toBe('split On Upper');
  expect(splitOnUpper('threeWordsHere')).toBe('three Words Here');
});

test('isPalindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
});
