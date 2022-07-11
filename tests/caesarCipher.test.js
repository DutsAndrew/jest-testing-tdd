import { caesarCipher } from "../scripts/caesarCipher";

test('caesarCipher doesn\'t shift when cipher amount is 0', () => {
  expect(caesarCipher('Aaa', 0)).toBe('Aaa');
})

test('caesarCipher shifts when cipher amount isn\'t 0', () => {
  expect(caesarCipher('Aaa', 1)).toBe('Bbb');
})

test('caesarCipher can shift through alphabet multiple times', () => {
  expect(caesarCipher('Aaa', 30)).toBe('Ddd');
})

test('caesarCipher can shift from Z to A', () => {
  expect(caesarCipher('Zzz', 2)).toBe('Bbb');
})