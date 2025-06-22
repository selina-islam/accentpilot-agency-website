
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
  <div className='bg-[#0F172A]'>
   <Navbar/>
 <main className='min-h-screen'> 
    <Outlet/>
 </main>
  <Footer/>
  </div>
  )
}

export default App
