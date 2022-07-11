function reverseString(string) {
  let newString = string.split('').reverse().join('');
  return newString;
}

export { reverseString }