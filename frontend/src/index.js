import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, Login, Profil, Home } from "./components";
import { Sports, Partys, Restaurants } from "./components/categories";

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
        <Route path="/home/Sports/:id" element={<Sports />} />
        <Route path="/home/Restaurants/:id" element={<Restaurants />} />{" "}
        <Route path="/home/Partys/:id" element={<Partys />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
