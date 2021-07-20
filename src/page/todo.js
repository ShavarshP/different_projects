import React from "react";
import CartTask from "../componet/cartTask";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: localStorage.getItem("myCat")
        ? JSON.parse(localStorage.getItem("myCat"))
        : [],
      newTask: "",
    };
  }
  componentDidUpdate() {
    console.log("maladec");
    localStorage.setItem("myCat", JSON.stringify(this.state.tasks));
  }

  add = () => {
    console.log(this.state.newTask);
    if (this.state.newTask) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { value: this.state.newTask, isprocess: false },
        ],
        newTask: "",
      });
      localStorage.setItem(
        "myCat",
        JSON.stringify([
          ...this.state.tasks,
          { value: this.state.newTask, isprocess: false },
        ])
      );
    }
  };

  onChangeHandler = (event) => {
    this.setState({ newTask: event.target.value });
  };

  setItem = (data) => {
    localStorage.setItem("myCat", JSON.stringify(data));
  };

  delete = (dTask) => {
    this.setState({
      tasks: [
        ...this.state.tasks.filter((value) => {
          if (value.value !== dTask) {
            return value;
          }
        }),
      ],
    });
  };

  process = (dTask) => {
    this.setState({
      tasks: [
        ...this.state.tasks.map((t) => {
          if (t.value === dTask) {
            return { value: t.value, isprocess: true };
          }
          return t;
        }),
      ],
    });
  };

  render() {
    let tasks = this.state.tasks.map((task, index) => {
      return (
        <CartTask
          task={task.value}
          key={index}
          conditions={task.isprocess}
          delete={this.delete}
          process={this.process}
        />
      );
    });
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-200 justify-center py-10">
        <div className="bg-white rounded-xl p-4 w-80 shadow">
          <div className="flex">
            <input
              onChange={this.onChangeHandler}
              value={this.state.newTask}
              className="flex-initial bg-gray-100 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full mr-2 pl-4"
            ></input>
            <button className="flex-initial bg-blue-100 hover:bg-blue-200 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-20">
              <span className="text-blue-500" onClick={this.add}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </button>
          </div>
          {tasks}
        </div>
      </div>
    );
  }
}

export default Todo;
