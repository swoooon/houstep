import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import Main from "../pages/Main";
import Search from "../pages/Search";
import CheckRental from "../pages/CheckRental";

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={Home()} />
      <Route path="/main" element={Main()} />
      <Route path="/search" element={Search()} />
      <Route path="/checkRental" element={CheckRental()} />
    </Routes>
  </BrowserRouter>
)

export default Root;