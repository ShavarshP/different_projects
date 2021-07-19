import { useEffect, useState } from "react";
import Calculator from "./calculator";
import Cart from "./cartTask";

const Todo = (props) => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("myCat")
      ? localStorage.getItem("myCat").split(",")
      : []
  );
  console.log(localStorage.getItem("myCat"));
  const [newTask, setNewTask] = useState("");
  const [tasktebl, setTaskteb] = useState([]);
  const changeHandler = (e) => {
    setNewTask(e.target.value);
  };

  const deleteText = (txt) => {
    console.log(tasks.filter((item) => item !== txt));
    setTasks(tasks.filter((item) => item !== txt));
  };

  useEffect(() => {
    setTaskteb(
      [...tasks].map((item, index) => (
        <Cart key={index} text={item} func={deleteText} />
      ))
    );
    localStorage.setItem("myCat", tasks);
  }, [tasks]);

  const add = () => {
    if (newTask) {
      setTasks((oldTasks) => {
        return [...oldTasks, newTask];
      });
      setNewTask("");
    }
  };

  const remove = () => {
    setNewTask("");
  };
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
                  onChange={changeHandler}
                  value={newTask}
                />
                <button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-8 px-4 border border-gray-400 rounded shadow"
                  onClick={add}
                >
                  add
                </button>
                <button
                  className="bg-white hover:bg-gray-100 text-red-700 font-semibold h-8 px-4 border border-gray-400 rounded shadow"
                  onClick={remove}
                >
                  remove
                </button>
              </div>
              {tasktebl}
            </div>
            <Calculator />
            <Todo />
          </div>
        </div>
      </div>
      <div className="border border-red-700 w-1/5 h-96"></div>
    </div>
  );
};
