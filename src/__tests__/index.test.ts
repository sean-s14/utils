import {
  calculatePercent,
  isEqual,
  wait,
  getRandomColor,
  hexToRgb,
  rgbToHex,
  isDateValid,
  speedTest,
  cleanObject,
} from '../index';

test('calculatePercent', () => {
  expect(calculatePercent(3, 15)).toBe(20);
  expect(calculatePercent(23, 46)).toBe(50);
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

test('wait', async () => {
  await expect(wait(500).then(() => 500)).resolves.toBe(500);
  await expect(wait(1000).then(() => 1000)).resolves.toBe(1000);
});

test('getRandomColor', () => {
  for (let i = 0; i < 100; i++) {
    expect(getRandomColor()).toEqual(expect.stringMatching(/#[a-z0-9]{6}/i));
  }
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

test('cleanObject', () => {
  const obj1 = { a: 1, b: 0, c: true, d: false, e: 'a', f: '', g: null, h: undefined, i: NaN };
  const obj1ToBe = { a: 1, c: true, e: 'a' };
  expect(cleanObject(obj1)).toMatchObject(obj1ToBe);
});
