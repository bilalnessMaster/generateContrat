'use client'
import { useDroppable } from '@dnd-kit/core';
import React from 'react'
import Contrat from './Contrat';

const Column = ({header, contrats} : {header : string , contrats : any}) => {
    const {isOver, setNodeRef} = useDroppable({
        id: header,
      });
      const style = {
        color: isOver ? 'green' : undefined,
      };
      const filterArray = contrats.filter((contrat: any)=> contrat.status === header)
      // console.log(filterArray);
      
  return (
    <div
    ref={setNodeRef}
    style={style}
    className='min-h-xl mt-4'
    >
      <div>
        <h1 className='capitalize font-sans font-medium w-fit px-3 py-px rounded-full text-neutral-600 bg-neutral-100'>{header}</h1>
      </div>
      <div className='grid'>
        {
        filterArray.map((item: any)=>(
          <Contrat key={item.id} id={item.id}/>
      ))
      }
      </div>
    </div>
  )
}

export default Column