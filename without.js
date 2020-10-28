const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArraysEqual = function(arr1,arr2) {
  (eqArrays(arr1,arr2)) ? console.log(`😃Assertion passed: ${arr1} === ${arr2}`)
    : console.log(`😩Assertion Failed: ${arr1} !== ${arr2}`);
};

const without = function(array1,array2) {
  let newarray = [];
  array1.forEach((element) => {
    if ((!array2.includes(element)) && (!newarray.includes(element))) {
      newarray.push(element);
    }
  });
  return newarray;
};
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);