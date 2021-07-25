import { NavLink } from "react-router-dom";

const ComPost = ({ data, commit, addCommit, changehandler, newCommit }) => {
  return (
    <div className="max-w-md h-98 relative mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl mt-10">
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
          <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {data.title}
          </a>
          <p className="mt-2 text-gray-500 w-96">{data.post}</p>
        </div>
      </div>
      <div className="flex mx-10">
        <input
          onChange={changehandler}
          value={newCommit}
          className="flex-initial bg-gray-100 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full mr-2 pl-4"
        ></input>
        <button
          onClick={() => addCommit(data.id)}
          className="flex-initial bg-blue-100 hover:bg-blue-200 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 "
        >
          <span className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </span>
        </button>
      </div>
      {commit}
    </div>
  );
};
export default ComPost;
