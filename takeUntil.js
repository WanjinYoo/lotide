const takeUntil = function(array, callback) {
  // ...
  const result = [];
  for (const items of array) {
    if (!callback(items)) {
      result.push(items);
    } else {
      return result;
    }
  }
};
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



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual([ 1, 2, 5, 7, 2 ],results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ],results2);