import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({navActive, setNavActive}) => {
  return (
    <>
      <div className="flex flex-row text-white font-bold bg-[#575757] p-4 space-x-8">

        <Link to={'/'}>
        {navActive == 'home' ? ( <button className="relative px-6 py-2 bg-blue-400 hover:bg-[#e68a00] rounded-xl shadow-md transition duration-300 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[70%] after:h-[2px] after:bg-white">
  Home
</button>) : ( <button className="px-6 py-2 bg-yellow-400 hover:bg-[#e68a00] rounded-xl shadow-md transition duration-300">
          Home
        </button>)}
        
        </Link>
       <Link to={'/about'}>
      {navActive == 'about' ? ( <button className="relative px-6 py-2 bg-blue-400 hover:bg-[#e68a00] rounded-xl shadow-md transition duration-300 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[70%] after:h-[2px] after:bg-white">
          About
        </button>) : ( <button className="px-6 py-2 bg-yellow-400 hover:bg-[#e68a00] rounded-xl shadow-md transition duration-300">
          About
        </button>)}
       </Link>
        <Link to={'/user'}>
          {navActive == 'user' ? ( <button className="relative px-6 py-2 bg-blue-400 hover:bg-[#e68a00] rounded-xl shadow-md transition duration-300 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[70%] after:h-[2px] after:bg-white">
          User
        </button>) : ( <button className="px-6 py-2 bg-yellow-400 hover:bg-[#e68a00] rounded-xl shadow-md transition duration-300">
          User
        </button>)}
        </Link>
       
      </div>
    </>
  );
};

export default Navbar;
