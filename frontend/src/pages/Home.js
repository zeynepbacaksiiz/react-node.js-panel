import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Guncelle from "../pages/UpdateId.js";
import Login from "../pages/Login.jsx";
import Proje from "../pages/CreateScreen.js";
import Ekle from "../pages/CreateCreate.js";
import Logo from "../pages/Logo.js";
import LogoEkle from "../pages/LogoCreate.js";
import LogoDuzenle from "../pages/LogoUpdateId.js";
import Yetenek from "../pages/Skills.js";
import Hakkimda from "../pages/About.js";
import HakkimdaEkle from "../pages/AboutCreate.js";
import HakkimdaDuzenle from "../pages/AboutUpdateId.js";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard.jsx";
import YetenekGuncelle from "./SkillsUpdateId";
import Error from '../pages/Error.js'

import YetenekEkle from "./SkillsCreate.js";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
    
          <Route path="/proje" element={<Dashboard content={<Proje />} />}></Route>
          <Route
            path="/ekle"
            element={<Dashboard content={<Ekle />} />}
          ></Route>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/guncelle/:id"
            element={<Dashboard content={<Guncelle />} />}
          ></Route>
          <Route
            path="/logo"
            element={<Dashboard content={<Logo />} />}
          ></Route>
          <Route
            path="/logo-ekle"
            element={<Dashboard content={<LogoEkle />} />}
          ></Route>
          <Route
            path="/guncelle-logo/:id"
            element={<Dashboard content={<LogoDuzenle />} />}
          ></Route>
          <Route
            path="/yetenek"
            element={<Dashboard content={<Yetenek />} />}
          ></Route>
          <Route
            path="/yetenek/:id"
            element={<Dashboard content={<YetenekGuncelle />} />}
          ></Route>
          <Route
            path="/yetenek-ekle"
            element={<Dashboard content={<YetenekEkle />} />}
          ></Route>
          <Route
            path="/hakkimda"
            element={<Dashboard content={<Hakkimda />} />}
          ></Route>
          <Route
            path="/hakkimda-ekle"
            element={<Dashboard content={<HakkimdaEkle />} />}
          ></Route>
          <Route
            path="/guncelle-hakkimda/:id"
            element={<Dashboard content={<HakkimdaDuzenle />} />}
          ></Route>
              <Route path='*' exact={true} element={<Error />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default Home;
