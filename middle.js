const middle = function(array) {
  const resultarray = [];
  array.length < 3 ? resultarray.push()
  : array.length % 2 === 1 ? resultarray.push(array[Math.floor(array.length / 2)])
  : resultarray.push(array[Math.floor(array.length / 2) - 1],array[Math.floor(array.length / 2)]);
  return resultarray;
};
module.exports = middle;

