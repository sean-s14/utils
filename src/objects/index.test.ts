import { cleanObject, isPlainObject, deepMergeObjects, convertFalsyValues } from './index';

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

test('deepMergeObjects', () => {
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { b: { d: 3 } };
  const obj1ToBe = { a: 1, b: { c: 2, d: 3 } };
  expect(deepMergeObjects(obj1, obj2)).toMatchObject(obj1ToBe);
});

test('convertFalsyValues', () => {
  const obj1 = { a: 1, b: 0, c: false, d: null, e: undefined, f: '', g: [], h: {} };
  const obj1ToBe = { a: 1, b: 'a', c: 'a', d: 'a', e: 'a', f: 'a', g: 'a', h: 'a' };
  expect(convertFalsyValues(obj1, 'a')).toMatchObject(obj1ToBe);

  const obj2 = { a: 1, b: 0, c: false, d: null, e: undefined, f: '', g: [], h: {} };
  const obj2ToBe = { a: 1, b: [], c: [], d: [], e: [], f: [], g: [], h: [] };
  expect(convertFalsyValues(obj2, [])).toMatchObject(obj2ToBe);

  const obj3 = { a: 1, b: 0, c: false, d: null, e: undefined, f: '', g: [], h: {} };
  const obj3ToBe = {
    a: 1,
    b: undefined,
    c: undefined,
    d: undefined,
    e: undefined,
    f: undefined,
    g: undefined,
    h: undefined,
  };
  expect(convertFalsyValues(obj3, undefined)).toMatchObject(obj3ToBe);
});
