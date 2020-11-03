
const findKey = (object1,func) => {
  for (const key of Object.keys(object1)) {
    if (func(object1[key])) {
      return key;
    }
  }
};
module.exports = findKey;