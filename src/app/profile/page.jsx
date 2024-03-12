'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState('')

    useEffect(()=>{
        const getData = async () => {
            const res = await axios.get('/api/users/me')
            console.log(res.data.data._id);
            setUser(res.data.data._id)
        }
        getData();
    }, [])
  return (
    <main className='w-screen h-screen space-y-4 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold '>User Profile</h1>
        <Link href={`/profile/${user}`}>{user === '' ? 'Nothing' : user}</Link>
    </main>
  )
}

export default Profile