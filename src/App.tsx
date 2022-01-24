import React from "react";
import Header from "./components/UI/Header/Header";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
      </div>
    </HashRouter>
  );
}

export default App;
