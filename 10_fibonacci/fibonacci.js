const fibonacci = function (number) {
  let count;
  if (typeof number !== "number") {
    count = parseInt(number);
  } else {
    count = number;
  }
  if (count < 0) return "OOPS";
  if (count == 0) return 0;

  let prev1 = 1;
  let prev2 = 0;
  for (let i = 2; i <= count; i++) {
    let current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
