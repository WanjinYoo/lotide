const countLetters = function(input) {
  const result = {};
  for (const element of input) {
    if (element !== " ") {
      if (result[element]) {
        result[element]++;
      } else {
        result[element] = 1;
      }
    }
  
  }
  return result;
};




console.log(countLetters("lighthouse in the house"));