
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😩Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqObjects = function(object1, object2) {
  if (Object.keys(object2).length !== Object.keys(object1).length) {
    return false;
  }
  for (let [key,value] of Object.entries(object1)) {
    if (!Object.keys(object2).includes(key)) {
      return false;
    } else if (object2[key] !== value) {
      return false;
    }
  }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab,ba),true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,abc),false);