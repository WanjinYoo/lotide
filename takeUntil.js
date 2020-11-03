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
module.exports = takeUntil;