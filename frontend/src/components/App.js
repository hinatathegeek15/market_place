import "./App.css";
import React, { Component, useState, useEffect } from "react";

// import { useState, useEffect } from "react";
import Home from "./components/Home";
import Signin from "./components/Signin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/register";
import WelcomePage from "./components/welcomePage";
import Navbar from "./components/Navbar";
import ProfilePage from "./components/profilePage";
import SellOnEtsy from "./components/sellOnEtsy";
import ShopHome from "./components/shopHome";
import { useSelector } from "react-redux";
import userSlice, { selectUser } from "./features/userSlice";
import CheckShopName from "./components/checkShopName";
import SearchResultItems from "./components/searchResultItems";
import ShopHomeByOther from "./components/shopHomeByOther";
import ProfileForm from "./components/profileForm";

function App() {
  const user = useSelector(selectUser);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/updateProfile" element={<ProfileForm />} />
          <Route path="/sellonetsy" element={<SellOnEtsy />} />
          <Route path="/shopHome" element={<ShopHome />} />
          <Route path="/shopName" element={<CheckShopName />} />
          <Route path="/searchResults" element={<SearchResultItems />} />
          <Route path="/shopHomeForOthers" element={<ShopHomeByOther />} />
          <Route path="/profileForm" element={<ProfileForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
