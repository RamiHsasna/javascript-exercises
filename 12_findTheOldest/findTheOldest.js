const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    if (!oldest.yearOfDeath || !current.yearOfDeath) {
      oldest.yearOfDeath = new Date().getFullYear();
      current.yearOfDeath = new Date().getFullYear();
    }
    return oldest.yearOfDeath - oldest.yearOfBirth <
      current.yearOfDeath - current.yearOfBirth
      ? current
      : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
