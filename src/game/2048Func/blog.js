const Blog = ({ isBlack }) => {
  return (
    <div className=" bg-black w-24 h-24 p-1">
      <div className="bg-gray-200 h-full w-full text-7xl">
        {isBlack ? isBlack : <div></div>}
      </div>
    </div>
  );
};

export default Blog;
