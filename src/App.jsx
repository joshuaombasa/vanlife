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
import HostVanDetails from './pages/host/HostVanDetails'
import HostVanPhotos from './components/HostVanPhotos'
import HostVanPricing from './components/HostVanPricing'
import HostVanIdDetails from './components/HostVanIdDetails'

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
                  <Route index element={<HostDashBoard/>}/>
                  <Route path='income' element={<HostIncome/>}/>
                  <Route path='reviews' element={<HostReviews/>}/>
                  <Route path='vans' element={<HostVans/>}/>
                  <Route path='vans/:id' element={<HostVanDetails/>}>
                       <Route index element={<HostVanIdDetails/>}/>
                       <Route path='pricing' element={<HostVanPricing/>}/>
                       <Route path='photos' element={<HostVanPhotos/>}/>
                  </Route>
             </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
