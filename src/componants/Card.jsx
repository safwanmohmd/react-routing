import React from "react";
import { Link } from "react-router-dom";
const Card = ({ user }) => {

  
  return (
    <> 
      <div className="bg-[#2c2c2c] text-white rounded-2xl shadow-lg w-full max-w-md p-6  space-y-3 mx-auto ">
        <div className="flex justify-center font-bold text-2xl">
            <h1>User details</h1>
        </div>
        
        <h2 className="text-xl font-semibold">
          👤 Name: <span className="font-normal">{user.name}</span>
        </h2>
        <p className="text-base">
          📧 Email: <span className="font-normal">{user.email}</span>
        </p>
        <p className="text-base">
          📱 Phone: <span className="font-normal">{user.phone}</span>
        </p>
    <div className="flex justify-center">
         <Link to={`/user/${user.id}`}>
          <button className="btn bg-[#575757] p-2 rounded-xl">View User</button>
         </Link>
       
    </div>
      </div>
    </>
  );
};

export default Card;
