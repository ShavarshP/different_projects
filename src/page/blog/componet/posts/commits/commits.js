const Commits = ({ name, commit }) => {
  return (
    <div className="max-w-md h-98 relative mx-auto bg-white  shadow-md overflow-hidden md:max-w-2xl mt-10">
      <div className="md:flex">
        <div className="md:flex-shrink-0"></div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {name}
          </div>
          <p className="mt-2 text-gray-500 w-96">{commit}</p>
        </div>
      </div>
    </div>
  );
};

export default Commits;
