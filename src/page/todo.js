import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: localStorage.getItem("myCat")
        ? localStorage.getItem("myCat").split(",")
        : [],
      newTask: "",
    };
  }

  add = () => {
    if (this.state.newTask) {
      this.remove();
    }
  };

  remove = () => {
    this.setState((state) => ({
      ...state,
      newTask: "",
    }));
  };
  componentDidMount() {}

  render() {
    return (
      <div className="flex">
        <div className="border border-red-700 w-1/5 h-96"></div>
        <div className="flex justify-center flex-wrap content-center border border-red-700 w-3/5 h-96">
          <div className="flex justify-center  w-4/5 h-3/4 rounded-lg  ">
            <div>
              <div>
                <div className="border border-gray-500 rounded mt-6">
                  <input
                    className="placeholder-gray-100 placeholder-opacity-0 h-8 w-60 pl-2"
                    placeholder="text"
                    onChange={this.changeHandler}
                    value={this.state.newTask}
                  />
                  <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-8 px-4 border border-gray-400 rounded shadow"
                    onClick={this.add}
                  >
                    add
                  </button>
                  <button
                    className="bg-white hover:bg-gray-100 text-red-700 font-semibold h-8 px-4 border border-gray-400 rounded shadow"
                    onClick={this.remove}
                  >
                    remove
                  </button>
                </div>
                tasktebl
              </div>

              <Todo />
            </div>
          </div>
        </div>
        <div className="border border-red-700 w-1/5 h-96"></div>
      </div>
    );
  }
}

export default Todo;
