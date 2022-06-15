import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import Login from "./components/Login";
import Profil from "./components/Profil";
import Home from "./components/Home";

import Partys from "./components/categories/Partys";
import Sports from "./components/categories/Sports";
import Restaurants from "./components/categories/Restaurants";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/sports/:id" element={<Sports />} />
        <Route path="/home/restaurants/:id" element={<Restaurants />} />{" "}
        <Route path="/home/partys/:id" element={<Partys />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
