import React from "react";
import ComPost from "../posts/commitPost";
import Commits from "../posts/commits/commits";
import { withRouter } from "react-router";

class ComPag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCommit: "",
      posts: this.getData(),
      render: true,
    };
  }
  getData = () => {
    const data = JSON.parse(localStorage.getItem("store"));
    const url = window.location.pathname.split("/");
    const id = url[url.length - 1];

    return data.filter((item) => Number(item.id) === Number(id))[0];
  };

  trashPost = (id) => {
    // const data = JSON.parse(localStorage.getItem("store")).filter(
    //   (item) => item.id !== id
    // );
    // localStorage.setItem("store", JSON.stringify(data));
    // this.setState({render:false})
  };

  addCommit = () => {
    const url = window.location.pathname.split("/");
    const id = url[url.length - 1];
    const store = JSON.parse(localStorage.getItem("store")).map((item) => {
      if (Number(item.id) === Number(id)) {
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
      posts: this.getData(),
    });
  };
  changehandler = (e) => {
    this.setState({
      newCommit: e.target.value,
    });
  };

  render() {
    console.log(window.localStorage.id);
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
