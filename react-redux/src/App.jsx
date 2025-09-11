import React from "react";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Create from "./Create";
import Update from "./Update"
import Error from "./Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Update/>} />
      <Route path="/*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
