import { analyzeArray } from "../scripts/analyze-array";

test('reports array length', () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object.length).toBe(6);
});

test('reports array average', () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object.average).toBe(4);
});

test('reports array min', () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object.min).toBe(1);
});

test('reports array max', () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object.max).toBe(8);
});