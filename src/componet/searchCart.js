const SearchCart = (props) => {
  return (
    <div className="flex h-12 max-w-sm rounded-sm overflow-hidden shadow-lg mt-4 bg-gradient-to-r from-pink-100">
      <div className="mx-2  border-b border-gray-light">
        <img
          className="w-12 h-12 rounded-full "
          src={props.flag}
          alt="Avatar of Writer"
        />
      </div>
      <div className="flex mx-6 my-1 border-b border-gray-light">
        <div className="font-medium text-base text-gray-darker mb-4 mx-2">
          {props.name}
        </div>
      </div>
    </div>
  );
};
export default SearchCart;
