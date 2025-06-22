import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-4xl font-extrabold text-gray-600">404</h1>
      <p className="text-2xl md:text-3xl font-semibold underline mt-4 mb-6 text-gray-700">
        Oops! Page Not Found
      </p>
      <p className="text-gray-600 mb-8 max-w-md text-center">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <p className='text-gray-600 pb-2'>Looks like you're lost... Want to go back home?</p>
      <Link
        to="/"
        className="px-4 py-2 border border-gray-800 rounded text-gray-700 transition"
      >
        Go Back Now
      </Link>
    </div>
  );
};

export default ErrorPage;
