import { capitalise } from '../index';

test('capitalise', () => {
  expect(capitalise('sean')).toBe('Sean');
  expect(capitalise('sean stocker')).toBe('Sean stocker');
});
