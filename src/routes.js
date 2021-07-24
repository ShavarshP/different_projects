import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Calculator from "./componet/calculator";
import Tetris from "./game/tetris";
import Blog from "./page/blog/blog";
import Authentication from "./page/blog/componet/authentication/authentication";
import Form from "./page/form";

import Home from "./page/home";
import Search from "./page/search";
import Todo from "./page/todo";

export const useRoutes = (props) => {
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/todo" exact>
        <Todo />
      </Route>
      <Route path="/form" exact>
        <Form />
      </Route>
      <Route path="/search" exact>
        <Search />
      </Route>
      <Route path="/tetris" exact>
        <Tetris />
      </Route>
      <Route path="/calculator" exact>
        <Calculator />
      </Route>
      <Route path="/blog/home" exact>
        <Blog />
      </Route>
      <Route path="/blog/auth" exact>
        <Authentication />
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  );
};
