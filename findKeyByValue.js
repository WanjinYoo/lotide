
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😩Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(input,search) {
  for (let key of Object.keys(input)) {
    if (input[key].includes(search)) return key;
  }
  return;
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);