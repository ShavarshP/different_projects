const NewCart = (props) => {
  const remove = () => {
    props.func(props.text);
  };
  return (
    <div className="flex mt-1">
      <textarea
        className="resize-none border rounded-md w-60 pl-2"
        value={props.text}
      ></textarea>
      <button
        className="bg-white hover:bg-gray-100 text-red-700 font-semibold h-8 px-4 border border-gray-400 rounded shadow"
        onClick={remove}
      >
        remove
      </button>
    </div>
  );
};
export default NewCart;
