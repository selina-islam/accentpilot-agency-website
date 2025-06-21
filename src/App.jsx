
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
  <>
   <Navbar/>
 <main className='min-h-screen'> 
    <Outlet/>
 </main>
  <footer>footer</footer>
  </>
  )
}

export default App
