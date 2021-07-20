const CartTask = (props) => {
  if (props.conditions) {
    return (
      <div className="bg-gray-100 rounded-xl p-2 mb-2 bg-green-100">
        <div className="flex">
          <div className="flex-auto pl-2">
            <div className="leading-tight text-gray-500 line-through">
              {props.task}
            </div>
          </div>
          <div className="flex-none pr-2">
            <div className="text-red-500 hover:text-red-600 float-right">
              <span className="fa fa-minus-circle"></span>
            </div>
          </div>
          <div className="flex-none">
            <div className="text-green-500 hover:text-red-600 float-right">
              <span
                className="fa fa-check-circle"
                onClick={() => props.delete(props.task)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 rounded-xl p-2 mb-2 bg-gray-100">
      <div className="flex">
        <div className="flex-auto pl-2">
          <div className="leading-tight text-gray-500">{props.task}</div>
        </div>
        <div className="flex-none pr-2">
          <div className="text-red-500 hover:text-red-600 float-right">
            <span
              className="fa fa-minus-circle"
              onClick={() => props.process(props.task)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex-none">
          <div className="text-green-500 hover:text-red-600 float-right">
            <span
              className="fa fa-check-circle"
              onClick={() => props.delete(props.task)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartTask;
