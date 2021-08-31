export const isCardsSuitable = (dataF, dataC) => {
  const [data1, data2] = [dataF.open.name.split(""), dataC.name.split("")];
  if (
    data1[data1.length - 1] === data2[data2.length - 1] &&
    dataF.open.index < dataC.index
  ) {
    return false;
  }
  return true;
};
