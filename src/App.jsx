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
import VanDetails, {loader as VanDetailsLoader } from './pages/VanDetails'
import Host from './pages/host/Host'
import HostDashBoard from './pages/host/HostDashBoard'
import HostIncome from './pages/host/HostIncome'
import HostReviews from './pages/host/HostReviews'
import HostVans, {loader as HostVansLoader} from './pages/host/HostVans'
import HostVanDetails, {loader as HostVanIdDetailsLoader} from './pages/host/HostVanDetails'
import HostVanPhotos from './components/HostVanPhotos'
import HostVanPricing from './components/HostVanPricing'
import HostVanIdDetails from './components/HostVanIdDetails'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login, {loader as loginLoader, action as loginAction} from './pages/Login'
import { requireAuth } from './utils'
// localStorage.removeItem("loggedin")

const router = createBrowserRouter(createRoutesFromElements(

        <Route  path='/' element={<MainLayout/>}>
             <Route index element={<Home/>}/>
             <Route path='about' element={<About/>}/>
             <Route path='vans' element={<Vans/>} loader={vansLoader} errorElement={<Error/>}/>
             <Route path='vans/:id' element={<VanDetails/>} loader={VanDetailsLoader}/>
             <Route path='host' element={<Host/>} loader={async () => await requireAuth()} >
                  <Route index element={<HostDashBoard/>}  />
                  <Route path='income' element={<HostIncome/>} loader={async () => await requireAuth()} />
                  <Route path='reviews' element={<HostReviews/>} loader={async () => await requireAuth()} />
                  <Route path='vans' element={<HostVans/>} loader={HostVansLoader}/>
                  <Route path='vans/:id' element={<HostVanDetails/>} loader={HostVanIdDetailsLoader}>
                       <Route index element={<HostVanIdDetails/>} loader={async () => await requireAuth()} />
                       <Route path='pricing' element={<HostVanPricing/>} loader={async () => await requireAuth()} />
                       <Route path='photos' element={<HostVanPhotos/>} loader={async () => await requireAuth()} />
                  </Route>
             </Route>
             <Route path='login' element={<Login/>} loader={loginLoader} action={loginAction}/>
             <Route path='*' element={<NotFound/>}/>
        </Route>
  
))

function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
