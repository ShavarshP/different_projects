import React from "react";
import ComPost from "../posts/commitPost";
import Commits from "../posts/commits/commits";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

class ComPag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCommit: "",
      posts: this.getData(),
      render: false,
    };
  }
  getData = () => {
    const data = JSON.parse(localStorage.getItem("store"));
    const url = window.location.pathname.split("/");
    const id = url[url.length - 1];

    return data.filter((item) => Number(item.id) === Number(id))[0];
  };

  trashPost = (idd) => {
    const data = JSON.parse(localStorage.getItem("store"));
    const url = window.location.pathname.split("/");
    const id = url[url.length - 1];
    const username = JSON.parse(localStorage.getItem("auth")).username;
    console.log(data[0].name);

    const newdata = data.filter(
      (item) => !(Number(item.id) === Number(id) && item.name === username)
    );
    localStorage.setItem("store", JSON.stringify(newdata));
    this.setState({ render: true });
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
    if (this.state.render) {
      return <Redirect to={"/blog/home"} />;
    }
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
