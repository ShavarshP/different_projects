import React from "react";
import ComPost from "../posts/commitPost";

class ComPag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: JSON.parse(localStorage.getItem("store")).filter(
        (item) => item.id === 558
      )[0],
    };
  }
  addCommit = () => {};

  render() {
    return (
      <div>
        <div className=" min-h-screen flex  justify-center ">
          <ComPost data={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default ComPag;
