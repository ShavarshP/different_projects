const Post = ({ data }) => {
  return (
    <div className="max-w-md relative mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div
            className="h-48 w-full object-cover md:w-48 flex  justify-center items-center"
            src="https://sites.google.com/site/pingvinua/_/rsrc/1472866486757/home/pingviin.jpg?height=400&width=321"
            alt="Man looking at item at a store"
          >
            <div className="bg-red-200 h-20 w-20  rounded-full flex  justify-center items-center">
              <p className="text-4xl ">{data.name[0]}</p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {data.name}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {data.title}
          </a>
          <p className="mt-2 text-gray-500">{data.post}</p>
        </div>
        <div className="text-green-500 w-10 right-0 -bottom-5 absolute h-10 mb-4 hover:text-red-600 float-right">
          <span
            className="fa fa-check-circle"
            // onClick={() => props.edit(props.task)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Post;
