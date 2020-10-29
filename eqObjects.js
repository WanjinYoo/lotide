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
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab,ba),true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab,abc),false);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);
//JSON.stringify(a1)==JSON.stringify(a2)