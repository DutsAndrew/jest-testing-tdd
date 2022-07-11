import {
  addIt,
  subtractIt,
  multiplyIt,
  divideIt
} from '../scripts/calculator.js';

test('addition works', () => {
  expect(addIt(2, 4)).toBe(6);
})

test('can add a string and a number', () => {
  expect(addIt('2', 4)).toBe(6);
})

test('can add a negative and a positive', () => {
  expect(addIt(-1, 5)).toBe(4);
})

test('subtract works', () => {
  expect(subtractIt(5, 3)).toBe(2);
})

test('can subtract and recieve a negative number', () => {
  expect(subtractIt(3, 5)).toBe(-2);
})

test('can subtract a negative and a positive', () => {
  expect(subtractIt(-3, 7)).toBe(-10);
})

test('can subtract two negative numbers', () => {
  expect(subtractIt(-4, -2)).toBe(-2);
})

test('can subtract with a number as a string', () => {
  expect(subtractIt('10', 2)).toBe(8);
})

test('multiply works', () => {
  expect(multiplyIt(2, 3)).toBe(6);
})

test('can multiply negative numbers', () => {
  expect(multiplyIt(-2, -4)).toBe(8);
})

test('can multiply a negative and a positive', () => {
  expect(multiplyIt(-5, 3)).toBe(-15);
})

test('can multiply two negative numbers', () => {
  expect(multiplyIt(-2, -5)).toBe(10);
})

test('can multiply a number and a string', () => {
  expect(multiplyIt('2', 4)).toBe(8);
})

test('can divide', () => {
  expect(divideIt(10, 5)).toBe(2);
})

test('dividend can be negative', () => {
  expect(divideIt(-10, 2)).toBe(-5)
})

test('divisor can be negative', () => {
  expect(divideIt(10, -2)).toBe(-5);
})

test('can divide with a string', () => {
  expect(divideIt('20', 5)).toBe(4);
})