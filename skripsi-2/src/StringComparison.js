export const versionCompare = (version, minSupport) => {
  if (!/^(?![0.]+$)[A-Za-z0-9]+(?:.[A-Za-z0-9]+){0,2}$/.test(version)) {
    return "NON_CONCLUSIVE";
  }
  if (version.length >= 10 || minSupport.length >= 10) {
    return "NON_CONCLUSIVE";
  }
  const versionSplit = version.split(".");
  const minSupportSplit = minSupport.split(".");
  const majorA = parseInt(versionSplit[0]);
  const majorB = parseInt(minSupportSplit[0]);

  if (majorA == majorB) {
    const minorA = parseInt(versionSplit[1]);
    const minorB = parseInt(minSupportSplit[1]);
    if (minorA >= minorB) {
      return "SUPPORTED";
    } else {
      return "UNSUPPORTED";
    }
  } else {
    if (majorA >= majorB) {
      return "SUPPORTED";
    } else {
      return "UNSUPPORTED";
    }
  }
};
