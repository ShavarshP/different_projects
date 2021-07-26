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
    };
  }

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
      posts: JSON.parse(localStorage.getItem("store")).filter(
        (item) => item.id === 559
      )[0],
    });
    console.log(store);
  };
  changehandler = (e) => {
    this.setState({
      newCommit: e.target.value,
    });
  };

  render() {
    const commit = this.state.posts.coment.map((item) => (
      <Commits name={item.name} commit={item.commit} />
    ));

    return (
      <div>
        <div className=" min-h-screen flex  justify-center ">
          <ComPost
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
