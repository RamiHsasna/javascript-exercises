const sumAll = function (number1, number2) {
  let sum = 0;
  if (number1 < 0 || number2 < 0) return "ERROR";
  if (isNaN(number1) || isNaN(number2)) return "ERROR";
  if (number1 < number2) {
    for (let i = number1; i <= number2; i++) sum += i;
  } else {
    for (let i = number2; i <= number1; i++) sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
