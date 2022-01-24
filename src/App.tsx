import React from "react";
import { HashRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Pages from "./pages";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Pages />}>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
