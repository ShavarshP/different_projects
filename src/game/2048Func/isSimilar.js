const isSimilar = (mtr1, mtr2) => {
  let iTrue = false;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      if (mtr1[i][j] != mtr2[i][j]) {
        iTrue = true;
        break;
      }
    }
    if (iTrue) {
      break;
    }
  }

  return iTrue;
};
export default isSimilar;
