const Blog = ({ isBlack }) => {
  return (
    <div className=" bg-black w-24 h-24 p-1">
      <div className="flex items-center justify-around bg-gray-200 h-full w-full text-4xl">
        {isBlack ? isBlack : <div></div>}
      </div>
    </div>
  );
};

export default Blog;
