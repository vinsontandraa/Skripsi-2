const versionCompare = (versionA, versionB) => {
  if (isNaN(versionA) || isNaN(versionB)) {
    return "not valid input";
  }
  if (versionA.length >= 10 || versionB.length >= 10) {
    return "not valid input";
  }
  versionASplit = versionA.split(".");
  versionBSplit = versionB.split(".");
  majorA = parseInt(versionASplit[0]);
  majorB = parseInt(versionBSplit[0]);
  if (majorA == majorB) {
    minorA = parseInt(versionASplit[1]);
    minorB = parseInt(versionBSplit[1]);
    if (minorA >= minorB) {
      return "supported";
    } else {
      return "unsupported";
    }
  } else {
    if (majorA >= majorB) {
      return "supported";
    } else {
      return "unsporrted";
    }
  }
};
