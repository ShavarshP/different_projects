import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Calculator from "./componet/calculator";
import Form from "./page/form";

import Home from "./page/home";
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

      <Route path="/calculator" exact>
        <Calculator />
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  );
};
