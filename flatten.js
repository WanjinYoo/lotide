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



console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]