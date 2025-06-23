import React from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router'

const Registration = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
 const onSubmit = (data) => console.log(data)

  return (
    <div className='flex flex-col justify-center items-center min-h-screen mx-w-md '>
      <div className='bg-gray-300 p-4 text-black rounded shadow shadow-blue-400'>
        
        <h2 className='text-2xl text-center text-gray-800 font-semibold mb-4'>Registration Now</h2>
   
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
               <label className='text-sm text-gray-800 font-semibold block mb-2'>Email: </label>
        <input
        {...register("email", { required: 'Email ir required', pattern: {
  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  message: 'Invalid email address'
}  })}
        type="email" id='email' name='email' placeholder='xyz@company.com' required className='border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent'/>
        {errors.email && <p className='text-xs mt-1 italic text-center text-red-500'>{errors.email.message}</p>}

        </div>
        <div>
               <label className='text-sm text-gray-800 font-semibold block mb-2'>Password: </label>
        <input 
        {...register("password", { required: 'Password ir required', minLength: {
  value: 6,
  message: 'password must be at least 6 characters'
}  })}
        type="password" id='password' name='password' placeholder='Password' required className='border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent'/>
        {errors.password && <p className='text-xs mt-1 italic text-center text-red-500'>{errors.password.message}</p>}
        </div>
       <button className='bg-blue-600 mt-2 w-full p-1 rounded text-white hover:bg-blue-700 transition transform duration-200 text-sm'>Sign Up</button>
      </form>
      <div className='flex items-center justify-center'>
        <div className='h-0.5 w-full bg-gray-400 '></div>
        <span className='p-2 text-gray-600 '>Or</span>
        <div className='h-0.5 w-full bg-gray-400'></div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6 text-xl'>
        <Link className='cursor-pointer text-blue-600'><FaFacebook/></Link>
        <Link className='cursor-pointer text-red-600'><FaGoogle/></Link>
        <Link className='cursor-pointer'><FaGithub/></Link>
      </div>
      <p className='text-xs text-center pt-2'>Have an account? Please <Link to='/login' className='text-blue-800 underline cursor-pointer'>Login</Link></p>
      </div>
    </div>
  )
}

export default Registration