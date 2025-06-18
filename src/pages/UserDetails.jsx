import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link  } from 'react-router-dom'
import UsrCard from '../componants/UsrCard'
const UserDetails = () => {
    const {id} = useParams()
    const [user,setUser] = useState([])
      const [loadState,setLoadState] = useState(true)
    const getUser = async ()=>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(res.data);
        setUser(res.data)
        setLoadState(false)
    }
    useEffect(()=>{
        getUser()
    },[])

    if (loadState) {
    return <div className='text-center text-white mt-10'>Loading...</div>;
  }
  return (
      <>
      <div className='flex justify-center items-center h-screen'>
        <UsrCard user={user}/>
      </div>
      </>
  )
}

export default UserDetails