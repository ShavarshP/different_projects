import React from "react";
import { Redirect } from "react-router-dom";
import Headers from "./componet/headers";
import Post from "./componet/posts/posts";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: JSON.parse(localStorage.getItem("store"))
        ? JSON.parse(localStorage.getItem("store"))
        : [],
      join: false,
    };
  }
  componentDidMount() {
    this.setState({ join: false });
  }
  addComit = () => {
    if (localStorage.getItem("auth")) {
      return true;
    }
    return false;
  };
  login = () => {
    if (localStorage.getItem("auth")) {
      this.setState({ join: null });
      localStorage.removeItem("auth");
      return;
    }
    this.setState({ join: true });
    return null;
  };

  render() {
    if (this.state.join) {
      return <Redirect to={"/blog/auth"} />;
    }
    localStorage.setItem("store", JSON.stringify(this.state.posts));
    const posts = this.state.posts.map((item) => (
      <Post data={item} addComit={this.addComit} />
    ));
    return (
      <div>
        <Headers login={this.login} />
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
