import "./App.css";
import React from "react";
import Home from "./component/Home";
import Section2 from "./component/Section2";
import SignIn from "./component/SignIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
