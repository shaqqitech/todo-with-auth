import React from 'react'

const UserProfile = ({params}) => {
  return (
    <div className='w-screen h-screen space-y-3 flex justify-center items-center flex-col'>
        <h1 className='font-bold text-2xl'>User ID:</h1>
        <div className='w-fit px-3 py-2 bg-blue-500 text-black font-semibold rounded-md'>
        {params.id}
        </div>
    </div>
  )
}

export default UserProfile