import React from "react";
import CartTask from "../componet/cartTask";

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

  componentDidMount() {}

  render() {
    let tasks = this.state.tasks.map((task) => {
      return <CartTask task={task} />;
    });
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-200 justify-center py-10">
        <div className="bg-white rounded-xl p-4 w-80 shadow">
          <div className="flex">
            <input className="flex-initial bg-gray-100 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full mr-2 pl-4"></input>
            <button className="flex-initial bg-blue-100 hover:bg-blue-200 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-20">
              <span className="fa fa-plus text-blue-500"></span>
            </button>
          </div>
          {tasks}
        </div>
      </div>
    );
  }
}

export default Todo;
