const versionCompare = (versionA, versionB) => {
  if (versionA.length >= 10 || versionB.length >= 10) {
    return "not valid input";
  }
  versionASplit = versionA.split(".");
  versionBSplit = versionB.split(".");
  majorA = parseInt(versionASplit[0]);
  majorB = parseInt(versionBSplit[0]);
  if (isNaN(versionA) || isNaN(versionB)) {
    return "Non-Conclusive";
  }
  if (majorA == majorB) {
    minorA = parseInt(versionASplit[1]);
    minorB = parseInt(versionBSplit[1]);
    if (minorA >= minorB) {
      return "Supported";
    } else {
      return "Unsupported";
    }
  } else {
    if (majorA >= majorB) {
      return "Supported";
    } else {
      return "Unsporrted";
    }
  }
};
