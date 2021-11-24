import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from "../pages/Main";

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={Main()} />
    </Routes>
  </BrowserRouter>
)

export default Root;