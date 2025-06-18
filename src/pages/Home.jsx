import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const Home = ({navActive,setNavActive}) => {
  useEffect(()=>{
    setNavActive('home')
  },[])
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-6">
      <div className="bg-[#2c2c2c] p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6 text-center">
        <h1 className="text-4xl font-bold text-yellow-400">
          Welcome! 
        </h1>
        <p className="text-gray-300 text-lg">
          Thanks for visiting our platform. Let’s get you started!
        </p>
<Link to={'/user'}>
 <button className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-500 transition">
          Go
        </button>
</Link>
       
      </div>
    </div>
  );
};

export default Home