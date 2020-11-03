const eqObjects = require(`./eqObjects`);

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual,expected) ? console.log(`😃Assertion passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`😩Assertion Failed: ${actual} !== ${expected}`);
};
module.exports = assertObjectsEqual;