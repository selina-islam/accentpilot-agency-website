import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
   <Route element={<App/>}>
    <Route path='/' element={<Home/>}/>
   </Route>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
