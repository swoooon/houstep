import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import Main from "../pages/Main";

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={Home()} />
      <Route path="/main" element={Main()} />
    </Routes>
  </BrowserRouter>
)

export default Root;