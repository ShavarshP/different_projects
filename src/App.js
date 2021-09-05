import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Gamebum from "./game/reverso_context/reversoContext";
import { useRoutes } from "./routes";

function App() {
  return <Gamebum />;
}

export default App;
