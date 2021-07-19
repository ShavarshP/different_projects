import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calculator: 0 };
  }

  add = () => {
    console.log(this.state.calculator);
    this.setState({ calculator: this.state.calculator + 1 });
  };

  reduce = () => {
    this.setState({ calculator: this.state.calculator - 1 });
  };

  render() {
    return (
      <div className="flex">
        <h2 className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-8 px-4 border border-gray-400 rounded shadow">
          {this.state.calculator}.
        </h2>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-8 px-4 border border-gray-400 rounded shadow"
          onClick={this.add}
        >
          +
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-8 px-4 border border-gray-400 rounded shadow"
          onClick={this.reduce}
        >
          -
        </button>
      </div>
    );
  }
}

export default Calculator;
