import { capitalizeFirstLetter } from '../scripts/capitalizeString.js';

test('capitalize first letter in string', () => {
  expect(capitalizeFirstLetter('hello world')).toMatch(/^[A-Z]/g);
})