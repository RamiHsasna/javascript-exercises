const removeFromArray = function (array, ...args) {
  const resArray = []; //creates an empty array to which we'll affect the result array
  for (let i = 0; i < array.length; i++) {
    //for loop each element of the parameter array
    //checks if the array element is different to any of the argument values
    // and adds it to the result array
    if (!args.includes(array[i])) resArray.push(array[i]);
  }
  // and returns it
  return resArray;
};
// Do not edit below this line
module.exports = removeFromArray;
