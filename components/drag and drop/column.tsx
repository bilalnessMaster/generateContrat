'use client'
import { useDroppable } from '@dnd-kit/core';
import React from 'react'
import Contrat from './Contrat';
import { cn } from '@/utils/cn';
interface contratsProps { 
  typeEntreprise: "petite" | "moyenne" | "grande";
    nomEntreprise: string;
    budget: number;
    id: number;
    propriétaire: string;
    createdAt: string;
}

const Column = ({header, contrats} : {header : string , contrats : contratsProps[]}) => {
    const {isOver, setNodeRef} = useDroppable({
        id: header,
      });
      const style = {
        color: isOver ? 'green' : undefined,
      };
      // const filterArray = contrats.filter((contrat: any)=> contrat.statut === header)
      // const totalBudgets = contrats.reduce((contrat: any)=> contrat.status === header)
      // console.log(filterArray);
      
  return (
    <div
    ref={setNodeRef}
    style={style}
    className='min-h-[900px] mt-4 space-y-3'
    >
      <div>
        <h1 className={cn('capitalize font-sans font-medium w-fit px-3 py-px rounded-full text-neutral-600 bg-neutral-100')}>{header}</h1>
      </div>
      <div className='grid gap-2'>
        {
        contrats?.map((item: contratsProps)=>(
          <Contrat {...item} key={item.id} id={item.id}/>
      ))
      }
      </div>
    </div>
  )
}

export default Column