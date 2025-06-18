import React from 'react'
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold text-yellow-400">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-gray-300">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-500 transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound