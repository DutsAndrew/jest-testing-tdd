export { caesarCipher }

const _ = require("lodash");

function caesarCipher(string, cipherAmount) {
  let newString = '';
  for (let i in string) {
    let currentCharCode = string[i].charCodeAt();
    if (currentCharCode === 32) {
      newString += ' ';
    } else {
      let getNewCharCode = shiftCipher(currentCharCode, cipherAmount);
      let newCharCode = String.fromCharCode(getNewCharCode);
      newString += newCharCode;
    }
  }
  return newString;
}

function shiftCipher(currentCharCode, cipherAmount) {
  let newChar = (currentCharCode*1 + cipherAmount*1);

  // capital band = 65 - 90, lowercase band = 97 - 122
  // Handles readjusting cipher when it reaches the max charcode amount
  if (_.inRange(currentCharCode, 65, 90) && newChar > 90) {
    let restartCapitalBand = (newChar*1 - 90*1);
    newChar = 65*1 + restartCapitalBand*1;
  } else if (_.inRange(currentCharCode, 97, 122) && newChar > 122) {
    let restartLowerCaseBand = (newChar*1 - 122*1);
    newChar = 97*1 + restartLowerCaseBand*1;
  } else {
    newChar = (currentCharCode*1 + cipherAmount*1);
  }
  return newChar;
}

let a = 'hello world'
caesarCipher(a, 10);