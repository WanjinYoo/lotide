const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    for (const key in itemsToCount) {
      if (item === key && itemsToCount[item]) {
        results[key] === undefined ? results[key] = 1
          : results[key]++;
      }
    }
  }
  console.log(results);

  return results;
};
module.exports = countOnly;