import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home/Home.jsx'
import Services from './pages/Services.jsx'
import Blogs from './pages/Blogs.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Pricing from './Home/Pricing.jsx'
import Login from './components/Login.jsx'
import Registration from './components/registration.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
   <Route element={<App/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/Blogs' element={<Blogs/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Registration/>}/>
   </Route>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
