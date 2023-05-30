import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import Host from './pages/host/Host'
import HostDashBoard from './pages/host/HostDashBoard'
import HostIncome from './pages/host/HostIncome'
import HostReviews from './pages/host/HostReviews'
import HostVans from './pages/host/HostVans'

function App() {
  

  return (
    <>
      <Routes>
        <Route  path='/' element={<MainLayout/>}>
             <Route index element={<Home/>}/>
             <Route path='about' element={<About/>}/>
             <Route path='vans' element={<Vans/>}/>
             <Route path='vans/:id' element={<VanDetails/>}/>
             <Route path='host' element={<Host/>}>
                  <Route path='dashboard' element={<HostDashBoard/>}/>
                  <Route path='income' element={<HostIncome/>}/>
                  <Route path='reviews' element={<HostReviews/>}/>
                  <Route path='vans' element={<HostVans/>}/>
             </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
