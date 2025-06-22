
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
  <div className='bg-white'>
   <Navbar/>
 <main className='min-h-screen'> 
    <Outlet/>
 </main>
  <footer>footer</footer>
  </div>
  )
}

export default App
