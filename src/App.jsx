import React from 'react'
import { 
  Routes, 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'
import './App.css'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Vans, {loader as vansLoader} from './pages/Vans'
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
import NotFound from './pages/NotFound'

const router = createBrowserRouter(createRoutesFromElements(

        <Route  path='/' element={<MainLayout/>}>
             <Route index element={<Home/>}/>
             <Route path='about' element={<About/>}/>
             <Route path='vans' element={<Vans/>} loader={vansLoader}/>
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
             <Route path='*' element={<NotFound/>}/>
        </Route>
  
))

function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
