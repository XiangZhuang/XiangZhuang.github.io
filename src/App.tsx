import React from "react";
import { HashRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import { NotificationProvider, Notifications } from "react-easy-notification";
import Header from "./components/UI/Header/Header";
import Pages from "./pages";
import Home from "./pages/Home";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <NotificationProvider>
      <HashRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Pages />}>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Route>
          </Routes>
          <Footer />
        </div>
        <Notifications />
      </HashRouter>
    </NotificationProvider>
  );
}

export default App;
