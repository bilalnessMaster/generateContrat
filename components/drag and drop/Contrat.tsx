'use client'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useDraggable } from '@dnd-kit/core';
import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { EllipsisVertical } from 'lucide-react'
import { cn } from "@/utils/cn";

type ContratProps = {
    typeEntreprise: "petite" | "moyenne" | "grande";
    nomEntreprise: string;
    budget: number;
    id: number;
    propriétaire: string;
    createdAt: string;
}

const Contrat = ({ id, typeEntreprise, createdAt, nomEntreprise, propriétaire, budget }: ContratProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className='h-50 border w-[80%] border-neutral-200 bg-white font-sans  cursor-grab active:cursor-grabbing'
        >
            <div className='border-b border-b-neutral-200 h-10 flex items-center pl-3 pr-2 justify-between'>
                <h1 className='font-medium truncate max-w-[180px]'>
                    {nomEntreprise}
                </h1>
                <Popover>
                    <PopoverTrigger
                        className="hover:bg-neutral-100 p-1 rounded"

                    >
                        <EllipsisVertical size={20} />
                    </PopoverTrigger>
                    <PopoverContent
                        side="bottom"
                        className="flex flex-col rounded-none divide-y divide-neutral-200 font-sans text-sm w-fit p-0 shadow-lg"
                        align="end"
                    >
                        <button className="inline-flex items-center gap-2 cursor-pointer px-3 py-2 hover:bg-neutral-100 w-full text-left">
                            <span>Supprimer</span>
                        </button>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="px-3 py-2 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                    <i className="hgi hgi-stroke hgi-briefcase-02 text-lg text-neutral-500"></i>
                    <span className={cn("text-xs px-2 py-1 capitalize rounded-full font-medium", getTypeStyle(typeEntreprise))}>
                        {typeEntreprise}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="hgi hgi-stroke hgi-wallet-03 text-lg text-neutral-500"></i>
                    <span>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(budget)}</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="hgi hgi-stroke hgi-user text-lg text-neutral-500"></i>
                    <span className="px-2 bg-neutral-50 rounded-full py-1 truncate max-w-[150px]">
                        {propriétaire}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="hgi hgi-stroke hgi-clock-03 text-lg text-neutral-500"></i>
                    <span className="text-neutral-600">
                        {formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: fr })}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contrat


const getTypeStyle = (type: ContratProps['typeEntreprise']) => {
    switch (type) {
        case 'petite':
            return 'bg-blue-100 text-blue-800'
        case 'moyenne':
            return 'bg-yellow-100 text-yellow-800'
        case 'grande':
            return 'bg-pink-100 text-pink-800'
        default:
            return 'bg-neutral-100 text-neutral-800'
    }
}