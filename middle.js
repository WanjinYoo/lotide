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

const middle = function(array) {
  const resultarray = [];
  array.length < 3 ? resultarray.push()
  : array.length % 2 === 1 ? resultarray.push(array[Math.floor(array.length / 2)])
  : resultarray.push(array[Math.floor(array.length / 2) - 1],array[Math.floor(array.length / 2)]);
  return resultarray;
};


assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);