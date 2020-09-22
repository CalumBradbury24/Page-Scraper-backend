//Utility functions
const Checks = (element, array) => {
  if (checkEmptyStrings(element)) {
    if (checkElement(element, array)) {
      return true;
    }
  }
  return false;
};

const checkElement = (elementToCheck, array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i].position === elementToCheck) {
      return false;
    }
  }
  return true;
};

const checkEmptyStrings = (element) => {
  if (element === "") {
    return false;
  }
  return true;
};

module.exports = Checks;
