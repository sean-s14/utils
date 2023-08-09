import { cleanObject, isPlainObject } from './index';

test('cleanObject', () => {
  const obj1 = { a: 1, b: 0, c: true, d: false, e: 'a', f: '', g: null, h: undefined, i: NaN };
  const obj1ToBe = { a: 1, c: true, e: 'a' };
  expect(cleanObject(obj1)).toMatchObject(obj1ToBe);
});

test('isPlainObject', () => {
  expect(isPlainObject({})).toBe(true);
  expect(isPlainObject({ a: 1 })).toBe(true);
  expect(isPlainObject(new Date())).toBe(true);
  expect(isPlainObject([])).toBe(false);
  expect(isPlainObject(null)).toBe(false);
  expect(isPlainObject(undefined)).toBe(false);
  expect(isPlainObject(0)).toBe(false);
  expect(isPlainObject('')).toBe(false);
  expect(isPlainObject(NaN)).toBe(false);
  expect(isPlainObject(() => null)).toBe(false);
});
