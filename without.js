const without = function(array1,array2) {
  let newarray = [];
  array1.forEach((element) => {
    if ((!array2.includes(element)) && (!newarray.includes(element))) {
      newarray.push(element);
    }
  });
  return newarray;
};
module.exports = without;
