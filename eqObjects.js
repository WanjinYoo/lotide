const eqArrays = require(`./eqArrays`);
const eqObjects = function(object1, object2) {
  if (Object.keys(object2).length !== Object.keys(object1).length) {
    return false;
  }
  if (Array.isArray(object1) && (Array.isArray(object2))) return eqArrays(object1,object2);
  else if (Object.keys(object1).length === 1) {
    if (object1 === object2) {
      return true;
    } else {
      return false;
    }
  }
  for (const key of Object.keys(object1)) {

    if (Object.keys(object2).includes(key)) {
      if (!eqObjects(object1[key],object2[key])) return false;
    }
  }
  return true;
};
module.exports = eqObjects;