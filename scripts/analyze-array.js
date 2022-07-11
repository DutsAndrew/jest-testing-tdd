export { analyzeArray }

function analyzeArray(array) {
  let length = array.length;
  let average = averageArray(array);
  let min = findMin(array);
  let max = findMax(array);
  let newObject = new numbersArray(length, average, min, max);
  return newObject;
}

function averageArray(array) {
  let sum = 0;
  for (let i in array) {
    sum += array[i];
  }
  let average = (sum*1 / array.length*1);
  return average;
}

function findMin(array) {
  return Math.min(...array);
}

function findMax(array) {
  return Math.max(...array);
}

function numbersArray(length, average, min, max) {
  this.length = length;
  this.average = average;
  this.min = min;
  this.max = max;
}