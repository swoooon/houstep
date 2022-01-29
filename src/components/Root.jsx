import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Main from '../pages/Main'
import Search from '../pages/Search'
import CheckRental from '../pages/CheckRental'
import NoAddress from '../pages/NoAddress'
import Attention from '../pages/Attention'
import Report from '../pages/Report'

const Root = () => (
  <Routes>
    <Route path='/' element={Home()} />
    <Route path='/main' element={Main()} />
    <Route path='/search' element={Search()} />
    <Route path='/checkRental' element={CheckRental()} />
    <Route path='/noAddress' element={NoAddress()} />
    <Route path='/attention' element={Attention()} />
    <Route path='/report' element={Report()} />
  </Routes>
)

export default Root