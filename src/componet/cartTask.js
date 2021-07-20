const CartTask = (props) => {
  return (
    <div className="bg-gray-100 rounded-xl p-2 mb-2 bg-gray-100">
      <div className="flex">
        <div className="flex-auto pl-2">
          <div className="leading-tight text-gray-500">Make Dinner</div>
        </div>
        <div className="flex-none pr-2">
          <div className="text-red-500 hover:text-red-600 float-right">
            <span className="fa fa-minus-circle"></span>
          </div>
        </div>
        <div className="flex-none">
          <div className="text-green-500 hover:text-red-600 float-right">
            <span className="fa fa-check-circle"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartTask;
