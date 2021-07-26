import React from "react";
import ComPost from "../posts/commitPost";
import Commits from "../posts/commits/commits";
import { withRouter } from "react-router";

class ComPag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCommit: "",
      posts: JSON.parse(localStorage.getItem("store"))[0],
      render: true,
    };
  }

  trashPost = (id) => {
    console.log(id);
    // const data = JSON.parse(localStorage.getItem("store")).filter(
    //   (item) => item.id !== id
    // );
    // localStorage.setItem("store", JSON.stringify(data));
    // this.setState({render:false})
  };

  addCommit = (id) => {
    console.log(id);
    const store = JSON.parse(localStorage.getItem("store")).map((item) => {
      if (item.id === id) {
        return {
          ...item,
          coment: [
            ...item.coment,
            {
              name: JSON.parse(localStorage.getItem("auth")).username,
              commit: this.state.newCommit,
            },
          ],
        };
      }
      return item;
    });
    localStorage.setItem("store", JSON.stringify(store));
    this.setState({
      newCommit: "",
      posts: JSON.parse(localStorage.getItem("store"))[0],
    });
  };
  changehandler = (e) => {
    this.setState({
      newCommit: e.target.value,
    });
  };

  render() {
    console.log("maladec");
    const commit = this.state.posts.coment.map((item) => (
      <Commits name={item.name} commit={item.commit} />
    ));

    return (
      <div>
        <div className=" min-h-screen flex  justify-center ">
          <ComPost
            trashPost={this.trashPost}
            newCommit={this.state.newCommit}
            changehandler={this.changehandler}
            data={this.state.posts}
            commit={commit}
            addCommit={this.addCommit}
          />
        </div>
      </div>
    );
  }
}

export default ComPag;
