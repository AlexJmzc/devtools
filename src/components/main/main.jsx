import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../header/header";
import InfoContainer from "../information/info_container";
import ColorsContainer from "../colors_palettes/colors_container";
import CreatorsContainer from "../creators/creators_container";


const Main = () => {

  return (
    <>
      <Header />
      <Router>
          <Routes>
            <Route path="/" element={<InfoContainer/>} />
            <Route path="/colors" element={<ColorsContainer />} />
            <Route path="/creators" element={<CreatorsContainer />} />
          </Routes>
      </Router>
    </>
  );
};

export default Main;
