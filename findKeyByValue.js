const assert = require(`chai`).assert;
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

assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);