import { reverseString } from '../scripts/reverseString.js';

test ('string is not the same', () => {
  let string = 'hello world';
  expect(reverseString(string)).not.toMatch(string);
})

test('string is reversed', () => {
  let string = 'hello world';
  expect(reverseString(string)).toMatch('dlrow olleh');
})
