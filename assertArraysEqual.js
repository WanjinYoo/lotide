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

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[3,2,3]);