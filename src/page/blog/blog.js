import React from "react";
import Headers from "./componet/headers";
import Post from "./componet/posts/posts";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          name: "Melo",
          title: "hmaria omn ",
          post: "sireli barekamner  inchpes eq",
          coment: [],
        },
        {
          name: "beno",
          title: "Maladec",
          post: "sirun es du mareta qnqush u bari ",
          coment: [{ name: "shahs", commit: "saqoo" }],
        },
      ],
    };
  }

  render() {
    const posts = this.state.posts.map((item) => <Post data={item} />);
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
