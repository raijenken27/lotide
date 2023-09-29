const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (value === object[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;