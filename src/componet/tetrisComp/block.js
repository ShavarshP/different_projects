const TetrisComp = ({ isBlack }) => {
  if (isBlack) {
    return <div className="bg-gray-200 mr-1 w-6 h-6"></div>;
  }
  return <div className=" bg-black  mr-1 w-6 h-6"></div>;
};

export default TetrisComp;
