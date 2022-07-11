export { caesarCipher }

const _ = require("lodash");

function caesarCipher(string, cipherAmount) {
  let newString = '';
  let strippedString = removePunctuation(string);
  for (let i in strippedString) {
    let currentCharCode = strippedString[i].charCodeAt();
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

function removePunctuation(string) {
  let withoutPunctuation = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
  let finalString = withoutPunctuation.replace(/\s{2,}/g," ");
  return finalString;
}

function shiftCipher(currentCharCode, cipherAmount) {
  let newChar = (currentCharCode*1 + cipherAmount*1);

  // capital band = 65 - 90, lowercase band = 97 - 122
  // Handles readjusting cipher when it reaches the max charcode amount
  if (_.inRange(currentCharCode, 65, 91) && newChar > 90) {
    let restartCapitalBand = (newChar*1 - 90*1);
    newChar = 65*1 + restartCapitalBand*1 - 1;
    return newChar;
  } else if (_.inRange(currentCharCode, 97, 123) && newChar > 122) {
    let restartLowerCaseBand = (newChar*1 - 122*1);
    newChar = 97*1 + restartLowerCaseBand*1 - 1;
    return newChar;
  } else {
    return newChar;
  }
}

let a = 'hello world'
caesarCipher(a, 10);