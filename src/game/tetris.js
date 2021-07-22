import React from "react";
import Button from "../componet/button/button";

class Tetris extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gametablevalue: [], gametable: <div></div> };
  }
  componentDidMount() {
    let table = [];
    let value = [];

    for (let i = 0; i < 14; i++) {
      table[i] = [];
      value[i] = [];
      for (let j = 0; j < 8; j++) {
        value[i] = [...value[i], false];
        table[i] = [
          ...table[i],
          <div key={"" + i + j} className="bg-gray-200 mr-1 w-6 h-6"></div>,
        ];
      }
    }

    this.setState({
      gametable: table,
      gametablevalue: value,
    });
  }

  render() {
    console.log(this.state.gametablevalue);
    return (
      <div className=" flex  justify-center bg-gray-50 h-screen">
        <div className="absolute mr-1 m-96">
          <Button />
        </div>
        <div className="pl-1 mt-20 flex flex-wrap justify-center bg-gray-800 w-60 h-96">
          {this.state.gametable}
        </div>
      </div>
    );
  }
}

export default Tetris;
