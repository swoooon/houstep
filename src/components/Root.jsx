import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Main from '../pages/Main'
import Search from '../pages/Search'
import CheckRental from '../pages/CheckRental'
import CheckRentalFree from '../pages/CheckRentalFree'
import NoAddress from '../pages/NoAddress'
import Attention from '../pages/Attention'
import Report from '../pages/Report'
import ReportFree from '../pages/ReportFree'

const Root = () => (
  <Routes>
<<<<<<< Updated upstream
    <Route path='/' element={Home()} />
    <Route path='/main' element={Main()} />
    <Route path='/search' element={Search()} />
    <Route path='/checkRental' element={CheckRental()} />
    <Route path='/noAddress' element={NoAddress()} />
    <Route path='/attention' element={Attention()} />
    <Route path='/report' element={Report()} />
=======
    <Route path='/' element={<Home/>} />
    <Route path='/main' element={<Main/>} />
    <Route path='/search' element={<Search/>} />
    <Route path='/checkRental' element={<CheckRental/>} />
    <Route path='/checkRentalFree' element={<CheckRentalFree/>} />
    <Route path='/noAddress' element={<NoAddress/>} />
    <Route path='/attention' element={<Attention/>} />
    <Route path='/report' element={<Report/>} />
    <Route path='/reportFree' element={<ReportFree/>} />
>>>>>>> Stashed changes
  </Routes>
)

export default Root