import React from 'react'
import { useEffect, useState } from "react";

import axios from "axios";
import Card from "../componants/Card";

const User = ({navActive,setNavActive}) => {
  
  const [user, setUser] = useState([]);
  const [loadState,setLoadState] = useState(true)
  const getUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    console.log(res.data);
    setUser(res.data);
    setLoadState(false)
  };
  useEffect(() => {
    setNavActive('user')
    getUser();
  }, []);

if (loadState) {
    return <div className='text-center text-white mt-10'>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card user={user} />
      </div>
    </>
  );
};

export default User