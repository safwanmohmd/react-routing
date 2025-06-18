import React, { useState } from "react";
import Navbar from "./componants/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const App = () => {
  const [navActive,setNavActive] = useState()
  return (
    <>
    <Navbar  navActive={navActive} setNavActive={setNavActive}/>
    <Routes>
      <Route path="/" element={<Home navActive={navActive} setNavActive={setNavActive}/> }/>
      <Route path="/user" element={<User navActive={navActive} setNavActive={setNavActive}/>}/>
      <Route path="/user/:id" element={<UserDetails navActive={navActive} setNavActive={setNavActive}/>}/>
      <Route path="/about" element={<About navActive={navActive} setNavActive={setNavActive}/>}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
     
    </>
  );
};

export default App;
