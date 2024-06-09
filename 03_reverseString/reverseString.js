const reverseString = function (word) {
  let res = "";
  for (let i = word.length - 1; i >= 0; i--) {
    res += word[i];
  }
  return res;
};

// Do not edit below this line
module.exports = reverseString;
