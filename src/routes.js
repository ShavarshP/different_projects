import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Calculator from "./componet/calculator";
import Tetris from "./game/tetris";
import Blog from "./page/blog/home";
import Authentication from "./page/blog/componet/authentication/authentication";
import Form from "./page/form";

import Home from "./page/home";
import Search from "./page/search";
import Todo from "./page/todo";
import ComPag from "./page/blog/componet/commitPage/comPag";
import CreatPost from "./page/blog/componet/createpost/createpost";
import GamBam from "./game/2048";
import Sudoku from "./game/sudoku/sudoku";
import Auth from "./page/authentication/authPage";

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
      <Route path="/2048" exact>
        <GamBam />
      </Route>
      <Route path="/calculator" exact>
        <Calculator />
      </Route>
      <Route path="/blog/home" exact>
        <Blog />
      </Route>
      <Route path="/blog/commit/:id" exact>
        <ComPag />
      </Route>
      <Route path="/blog/auth" exact>
        <Authentication />
      </Route>
      <Route path="/blog/CreatPost" exact>
        <CreatPost />
      </Route>
      <Route path="/sudoku" exact>
        <Sudoku />
      </Route>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  );
};
