import React, { useEffect } from "react";

const About = ({setNavActive}) => {
  useEffect(()=>{
setNavActive('about')
  },[])
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-6">
      <div className="bg-[#2c2c2c] p-8 rounded-2xl shadow-lg w-full max-w-xl space-y-6 text-center">
        <h1 className="text-4xl font-bold text-yellow-400">About This Project</h1>
        <p className="text-gray-300 text-lg">
          This is a demo project built using <span className="text-yellow-400 font-semibold">React</span> and <span className="text-yellow-400 font-semibold">React Router</span>.
          It showcases basic page routing, component reuse, prop passing, and styled layouts using Tailwind CSS.
        </p>
      
      </div>
    </div>
  );
};

export default About;
