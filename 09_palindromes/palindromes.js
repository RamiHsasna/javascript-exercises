const palindromes = function (word) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned word
  const reversedWord = cleanedWord.split("").reverse().join("");

  // Check if the cleaned word is equal to its reversed version
  return cleanedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
