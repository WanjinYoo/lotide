
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😩Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqObjects = function(object1, object2) {
  for (let [key,value] of Object.entries(object1)) {
    if (!Object.keys(object2).includes(key)) {
      return false;
    } else if (object2[key] !== value) {
      return false;
    }
  }
  for (let [key,value] of Object.entries(object2)) {
    if (!Object.keys(object1).includes(key)) {
      return false;
    } else if (object1[key] !== value) {
      return false;
    }
  }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab,ba),true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,abc),false);