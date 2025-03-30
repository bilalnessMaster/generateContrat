import { useDraggable } from '@dnd-kit/core';
import React from 'react'

const Contrat = ({id}: {id:number}) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id:id,
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
            className='h-44 border w-full'
        >Contrat {id} </div>
    )
}

export default Contrat