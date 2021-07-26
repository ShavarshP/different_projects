import React from "react";
import Textarea from "@material-tailwind/react/Textarea";
import Input from "@material-tailwind/react/Input";
import idGenerator from "../idGenerator/idGenerator";
import { Redirect } from "react-router-dom";

const newId = idGenerator();

class CreatPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", text: "", isAdd: false };
  }
  changetitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  changetext = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  addPosts = () => {
    this.state.text && this.state.title ? this.add() : alert("maladec");
  };

  add = () => {
    console.log("maladec");
    const myName = JSON.parse(localStorage.getItem("auth"));

    localStorage.setItem(
      "store",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("store")),
        {
          name: myName.username,
          title: this.state.title,
          post: this.state.text,
          id: newId(),
          coment: [],
        },
      ])
    );
    this.setState({ isAdd: true });
  };

  render() {
    if (this.state.isAdd) {
      return <Redirect to={"/blog/home"} />;
    }
    return (
      <div className=" flex  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md  relative mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl mt-10">
          <div className="">
            <div className="block mt-10 mx-10 w-80">
              <Input
                onChange={this.changetitle}
                value={this.state.title}
                type="text"
                color="lightBlue"
                size="regular"
                outline={false}
                placeholder="Input"
              />
            </div>
            <div className="block mt-20 mx-10 reletiv">
              <Textarea
                onChange={this.changetext}
                value={this.state.text}
                color="lightBlue"
                size="sm"
                outline={false}
                placeholder="Textarea with small font size"
              />
            </div>
          </div>
          <button
            onClick={this.addPosts}
            className="my-6 block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
          >
            add
          </button>
        </div>
      </div>
    );
  }
}

export default CreatPost;
