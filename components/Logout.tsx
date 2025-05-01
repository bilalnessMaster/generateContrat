"use client"
import React from 'react'
import { useSession , signOut} from "next-auth/react"

const Logout = () => {
    const { data: session } = useSession()
    console.log(session);
    
    return (
    <div className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-2'>
        <span className='size-10 inline-flex items-center justify-center bg-brown-200 text-brown-500 rounded-full'>
            <span className='font-medium font-sans'>
                {session?.user?.name?.charAt(0)}
            </span>
        </span>
        <p className='font-medium'>
        {session?.user?.name}
        </p>
        </div>
        <button onClick={() => signOut()} className='flex items-center cursor-pointer'>
        <i className="hgi hgi-stroke hgi-login-02 text-xl text-gray-500"></i>
        </button>
    </div>
  )
}

export default Logout