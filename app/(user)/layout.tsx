import Navbar from '@/components/layouts/Navbar'
import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <main className='flex min-h-screen h-screen'>
      <section className='w-73 h-full'>
        <Navbar />
      </section>
      <section className='flex-grow h-full'>
        {children}
      </section>
    </main>
  )
}

export default layout