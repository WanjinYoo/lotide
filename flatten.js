const flatten = function(array) {
  let newarray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newarray.push(array[i][j]);
      }
    } else {
      newarray.push(array[i]);
    }
  }
  return newarray;
};
module.exports = flatten;