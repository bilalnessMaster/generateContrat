'use client'
import Column from '@/components/drag and drop/column'
import CreateContrat from '@/components/layouts/create-contrat'
import { DndContext, DragEndEvent, PointerSensor, UniqueIdentifier, useSensor, useSensors } from '@dnd-kit/core'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import axios from 'axios' ;
import { contrat } from '@prisma/client'


const Page = () => {
  const [contrats, setContrats] = useState<contrat[]>([])
  const {data :initialContratsd , isLoading } = useQuery({
    queryKey : ['contrats'] , 
    queryFn : async () =>{
      const {data} = await axios.get('/api/getContrats')
      return data
    },
    
  })
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );
  useEffect(()=> setContrats(initialContratsd?.contrats), [initialContratsd])

  const handleOver = async (event: DragEndEvent) => {
    const {active, over} = event
    
    if (!over) return;
    const {data} = await axios.post('/api/updateStatus',{id : active.id , statut : over.id})
    if(!data.success) return;
    setContrats(prevContrats => 
      prevContrats.map(contrat => {
        if (contrat?.id === active?.id) {
          return {
            ...contrat,
            statut: over.id.toString() // Conversion en string au cas où
          }
        }
        return contrat
      })
    )
  }
  console.log(initialContratsd?.contrats);
  
  if(!initialContratsd?.contrats) return null;
  return (
    <div className='overflow-y-auto'>
      <section className='w-full h-14 border-b border-brown-100/40 flex items-center px-6'>
        <h1 className='font-amoera text-2xl'>
          Les contrats
        </h1>
      </section>
      <section className='w-full p-4'>
        <div className='border-b border-brown-100/40 pb-4'>
          <CreateContrat />
        </div>
        <div className='grid grid-cols-4'>
          <DndContext onDragEnd={handleOver} sensors={sensors}>
            <Column header='à contacter' contrats={contrats?.filter(c => c.statut === 'à contacter')}/>
            <Column header='en cours' contrats={contrats?.filter(c => c.statut === 'en cours')}/>
            <Column header='en attente validation' contrats={contrats?.filter(c => c.statut === 'en attente validation')}/>
            <Column header='finalisé' contrats={contrats?.filter(c => c.statut === 'finalisé')}/>
          </DndContext>
        </div>
      </section>
    </div>
  )
}

export default Page