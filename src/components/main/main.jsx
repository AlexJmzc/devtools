import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../header/header";
import InfoContainer from "../information/info_container";
import Creators from "../creators/creators";

const Main = () => {

  return (
    <>
      <Header />
      <Router>
          <Routes>
            <Route path="/" element={<InfoContainer/>} />
            <Route path="/creators" element={<Creators/>} />
          </Routes>
      </Router>
    </>
  );
};

export default Main;
