import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-15 lg:px-28">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        <li>
          
          <ul className="p-2">
               
             
             
               <li>
        <details>
          <summary>Category</summary>
          <ul className="p-2">
               <li><NavLink to="/category/translation">Translation</NavLink></li>
              <li><NavLink to="/category/interpretation">Interpretation</NavLink></li>
              <li><NavLink to="/category/proofreading">Proofreading</NavLink></li>
              <li><NavLink to="/category/localization">Localization</NavLink></li>
          </ul>
        </details>
      </li>
          </ul>
        </li>
        
      </ul>
    </div>
    <div className='flex items-center'>
      <img src="eng.png" alt="photo" className='w-8 h-8 text-white'/>
      <a className="btn btn-ghost text-xl">AccentPilot</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
      <li>
        <details>
          <summary>Category</summary>
          <ul className="p-2">
               <li><NavLink to="/category/translation">Translation</NavLink></li>
              <li><NavLink to="/category/interpretation">Interpretation</NavLink></li>
              <li><NavLink to="/category/proofreading">Proofreading</NavLink></li>
              <li><NavLink to="/category/localization">Localization</NavLink></li>
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end flex items-center space-x-6">
   <button className='border px-6 py-1 border-gray-600 rounded hidden md:flex'><Link to='/login '>Log In</Link></button>
   <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium '><Link to='/pricing'>Start Free Trial</Link></button>
  </div>
</div>
  )
}

export default Navbar