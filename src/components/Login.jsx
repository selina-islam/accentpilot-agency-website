import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { AuthContexts } from '../context/AuthContext'
import { FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
const navigate= useNavigate()
 

 const { userLogin, goggleLogin,loginGithub, loginFacebook } = useContext(AuthContexts);  

const onSubmit = async (data) => {
  try {
    await userLogin(data.email, data.password);
    alert('Login successful!')
   
    navigate("/");
  } catch (error) {
   console.error(error.message)
  }
};

const handleGitgubLogin = () => {
    loginGithub()
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        navigate('/');
      })
      .catch((error) => {
        const credential = GithubAuthProvider.credentialFromError(error);
        console.error('GitHub login failed:', error);
      });
  };


const handleGoggleLogin= async()=>{
  try{ await goggleLogin( )
     navigate('/')

  }catch(error){
console.error('failed to login', error)

  }
}


const handleFacebookLogin=()=>{
  loginFacebook().then((result) => {
     const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
     const accessToken = credential.accessToken;
     navigate('/')
  }).catch((error)=>{
    console.error(error)
     const credential = FacebookAuthProvider.credentialFromError(error);
  })
}


  return (
    <div className="flex flex-col bg-gray-900 justify-center items-center min-h-screen">
      <div className="bg-gray-300 p-6 sm:p-8 text-black rounded shadow shadow-blue-400 w-full max-w-sm">
        <h2 className="text-2xl text-center text-gray-800 font-semibold mb-4 whitespace-nowrap">
          Please Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-sm text-gray-800 font-semibold block mb-2">
              Email:
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              id="email"
              placeholder="xyz@company.com"
              className="border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent w-full"
            />
            {errors.email && (
              <p className="text-xs mt-1 italic text-center text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="text-sm text-gray-800 font-semibold block mb-2">
              Password:
            </label>
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              type="password"
              id="password"
              placeholder="Password"
              className="border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent w-full"
            />
            {errors.password && (
              <p className="text-xs mt-1 italic text-center text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button type='submit' className="bg-blue-600 mt-2 w-full p-1 rounded text-white hover:bg-blue-700 transition transform duration-200 text-sm">
            Login
          </button>
        </form>

        <div className="flex items-center justify-center my-4">
          <div className="h-px w-full bg-gray-400"></div>
          <span className="px-2 text-gray-600 text-sm">Or</span>
          <div className="h-px w-full bg-gray-400"></div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xl mb-2">
          <button onClick={handleFacebookLogin} className="cursor-pointer text-blue-600">
            <FaFacebook />
          </button>
          <button onClick={handleGoggleLogin} className="cursor-pointer text-red-600">
            <FaGoogle />
          </button>
          <button onClick={handleGitgubLogin} className="cursor-pointer">
            <FaGithub />
          </button>
        </div>

        <p className="text-xs text-center pt-2">
          Don&apos;t have an account?
          <Link to="/register" className="text-blue-800 underline cursor-pointer ml-1">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
