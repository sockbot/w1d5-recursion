const check = function(num) {
  // if num is a luhn number, return true
  let result = false;
  let numAsArray = numToArray(num);
  console.log('numAsArray', numAsArray);
  for (let i = numAsArray.length - 2; i >= 0; i -= 2) {
    // double each other digit
    numAsArray[i] *= 2;
    if (numAsArray[i] > 9) {
      numAsArray[i] = addDigits(numAsArray[i]);
    }
    
  }
  console.log('numAsArray', numAsArray)
  for (let i = 0; i < numAsArray.length; i++) {
    result += numAsArray[i];
  }
  return result % 10 === 0;
}

const addDigits = function(num) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let resultArray = numToArray(num);
  // console.log('result as array', resultArray)
  let result = resultArray.reduce(reducer);
  // console.log('result reduced', result);
  return result;
}

const numToArray = function(num) {
  return num.toString().split('').map(x => Number(x));
}

let accountNums = [79927398710, 79927398711, 79927398712, 79927398713, 79927398714, 79927398715, 79927398716, 79927398717, 79927398718, 79927398719];
// let accountNums = [79927398713];
let answers = accountNums.map(x => check(x));
console.log(answers);

console.log(check(726072630));

// console.log(arrayToNum([ 5, 9, 9, 4, 5, 6, 9, 7, 5, 2, 9 ]))

