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
  if (Array.isArray(object1) && (Array.isArray(object2))) return eqArrays(object1,object2);
  else if (Object.keys(object1).length === 1) {
    if (object1 === object2) {
      return true;
    } else {
      return false;
    }
  }
  for (const key of Object.keys(object1)) {

    if (Object.keys(object2).includes(key)) {
      if (!eqObjects(object1[key],object2[key])) return false;
    }
  }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab,ba),true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,abc),false);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);
//JSON.stringify(a1)==JSON.stringify(a2)