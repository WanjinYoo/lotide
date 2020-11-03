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
const eqObjects = function(object1, object2) {
  if (Object.keys(object2).length !== Object.keys(object1).length) {
    return false;
  }
  for (let [key,value] of Object.entries(object1)) {
    if (!Object.keys(object2).includes(key)) {
      return false;
    } else if (Array.isArray(object2[key]) && Array.isArray(value)) {
      if (!eqArrays(object2[key],value)) {
        return  false;
      }
    } else if (object2[key] !== value) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual,expected) ? console.log(`😃Assertion passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`😩Assertion Failed: ${actual} !== ${expected}`);
};
const a = { a: '1', b: 2 };
const b = { b: 2, a: '1' };
assertObjectsEqual(a,b);