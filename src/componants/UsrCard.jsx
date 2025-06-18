import React from "react";
import { Link } from "react-router-dom";
const UsrCard = ({ user }) => {
  return (
    <>
      <div className="bg-[#2c2c2c] text-white rounded-2xl shadow-lg w-full max-w-md p-6 space-y-3 mx-auto ">
        <div className="flex justify-center font-bold text-2xl">
          <h1>User details</h1>
        </div>

        <h2 className="text-xl font-semibold">
          👤 Name: <span className="font-normal">{user.name}</span>
        </h2>

        <p>
          📧 <strong>Email:</strong>{" "}
          <span className="font-normal">{user.email}</span>
        </p>
        <p>
          📱 <strong>Phone:</strong>{" "}
          <span className="font-normal">{user.phone}</span>
        </p>
        <p>
          🧑 <strong>Username:</strong>{" "}
          <span className="font-normal">{user.username}</span>
        </p>

        <div className="pt-2">
          <h3 className="text-lg font-semibold underline">🏠 Address</h3>
          <p>
            <strong>Street:</strong>{" "}
            <span className="font-normal">{user.address.street}</span>
          </p>
          <p>
            <strong>Suite:</strong>{" "}
            <span className="font-normal">{user.address.suite}</span>
          </p>
          <p>
            <strong>City:</strong>{" "}
            <span className="font-normal">{user.address.city}</span>
          </p>
          <p>
            <strong>Zipcode:</strong>{" "}
            <span className="font-normal">{user.address.zipcode}</span>
          </p>
        </div>

        <p>
          🌐 <strong>Website:</strong>{" "}
          <span className="font-normal">{user.website}</span>
        </p>
        <p>
          🏢 <strong>Company:</strong>{" "}
          <span className="font-normal">{user.company.name}</span>
        </p>
        <div className="flex justify-center">
          <Link to={"/user"}>
            <button className="btn bg-[#575757] p-2 rounded-xl">Goback</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default UsrCard;
