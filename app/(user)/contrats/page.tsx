'use client'
import Column from '@/components/drag and drop/column'
import CreateContrat from '@/components/layouts/create-contrat'
import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'
import React, { useState } from 'react'
const contrats = [
  {
    id : 1 , 
    contrat : "contrat 1",
    status : 'to contact'
  },
  {
    id : 2 , 
    contrat : "contrat 2",
    status : 'to contact'
  }
]
const Page = () => {
  const [filtered , setFiltered] = useState(contrats)




  const handleOver = (event: DragEndEvent)=>{
    const {active , over} = event
   
    const contrats = filtered.map((contrat)=>{
      if(contrat.id === active.id && over?.id){
        return {
          ...contrat,
          status : over.id as UniqueIdentifier
        }
      }
      return contrat
    })
   
    
    setFiltered(contrats)
    
  }
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
          <div className='grid grid-cols-4'>
          <DndContext onDragEnd={handleOver}>
          <Column header='to contact' contrats={filtered}/>
          <Column header='contacted' contrats={filtered}/>
          <Column header='contract' contrats={filtered}/>
          </DndContext>
          </div>
      </section>
    </div>
  )
}

export default Page