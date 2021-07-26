import React from "react";
import Headers from "./componet/headers";
import Post from "./componet/posts/posts";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: JSON.parse(localStorage.getItem("store"))
        ? JSON.parse(localStorage.getItem("store"))
        : [],
    };
  }
  addComit = () => {
    if (localStorage.getItem("auth")) {
      return true;
    }
    return false;
  };

  render() {
    localStorage.setItem("store", JSON.stringify(this.state.posts));
    const posts = this.state.posts.map((item) => (
      <Post data={item} addComit={this.addComit} />
    ));
    return (
      <div>
        <Headers />
        <div className=" min-h-screen flex  justify-center ">
          <div>
            <h1 className="text-4xl mt-8">Posts:</h1>
            {posts}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
