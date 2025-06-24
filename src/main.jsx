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
import AuthProvider from './context/AuthContext.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import DashboardHome from './dashboard/DashboardHomme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
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
    {/* private route */}
    <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
    
   </Route>
   </Routes>
   </BrowserRouter>
  </AuthProvider>
  </StrictMode>,
)
