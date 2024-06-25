const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((product, item) => product * item, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0 || a === 1) return 1;
  let result = 1;
  for (let i = a; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
