import React from "react";
import FormComponet from "../componet/formComponet";

class Tetris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className=" flex  justify-center bg-gray-50 h-screen">
        <div className=" flex  justify-center bg-blue-300 w-60 h-96"></div>
      </div>
    );
  }
}

export default Tetris;
