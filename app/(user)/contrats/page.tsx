'use client'
import CreateContrat from '@/components/layouts/create-contrat'
import React from 'react'
const page = () => {
  return (
    <div>
      <section className='w-full h-14 border-b border-brown-100/40 flex items-center px-6'>
        <h1 className='font-amoera text-2xl'>
          les contrats
        </h1>
      </section>
      <section className='w-full p-4'>
        <div className=' border-b border-brown-100/40 pb-4'>
          <CreateContrat />
        </div>
      </section>
    </div>
  )
}

export default page