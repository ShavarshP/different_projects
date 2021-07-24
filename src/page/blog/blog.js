import React from "react";
import Headers from "./componet/headers";
import Post from "./componet/posts/posts";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Headers />
        <div className=" min-h-screen flex  justify-center ">
          <div>
            <h1 className="text-4xl mt-8">Posts:</h1>
            <Post />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
