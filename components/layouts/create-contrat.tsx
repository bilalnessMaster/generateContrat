'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const CreateContrat = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className='font-amoera text-lg inline-flex items-center  gap-1 cursor-pointer justify-center'>
                <span className='bg-brown-100/75 text-brown-400 w-28 text-xl h-8 flex items-center justify-center rounded-full '>
                    créer
                </span>
                <span className='size-8 inline-flex rounded-full bg-brown-300 items-center justify-center'>
                    <i className="hgi hgi-stroke hgi-add-01 text-brown-50 text-lg"></i>
                </span>
            </button>
            <AnimatePresence>
            {
                    isOpen && (
                        <motion.div 
                        initial={{
                            opacity : 0
                        }}
                        animate={{
                           opacity : 1
                        }}
                        onClick={() => setIsOpen(!isOpen)}  className='z-20 fixed inset-0 bg-black/10 backdrop-blur-xs'></motion.div>
                    )
                }
            </AnimatePresence>
            <AnimatePresence >
                {isOpen &&
                    (<motion.div
                        initial={{
                            y : 200
                        }}
                        animate={{
                           y : 0
                        }}
                        exit={{
                            y: 400
                        }}
                        style={{
                            translateX: "-50%"
                        }}
                        className='w-130 rounded-lg px-2 py-2 bg-brown-100/35 fixed z-30 bottom-3 left-1/2 space-y-2'>
                            <div className='w-full flex items-center justify-between font-amoera'>
                                <h1>
                                    creer un contrat 
                                </h1>
                                <button  className=''  type='button' onClick={() => setIsOpen(!isOpen)}>
                                <i className="hgi hgi-stroke hgi-cancel-01 text-xl"></i>
                                </button>
                            </div>
                            <form action="" className='space-y-1'>
                                <label htmlFor="entreprise" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-11 flex w-full  p-[0.2rem]'>
                                    <input type="text" id='entreprise' name='entreprise' className='w-full h-full bg-brown-50 outline-none pl-4 text-sm font-normal ' placeholder="Enter le de l'enterprise"/>
                                </label>
                                <label htmlFor="budget" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-11  flex w-full  p-[0.2rem]'>
                                    <input type="number" id='budget' name='budget' className='w-full h-full bg-brown-50 outline-none pl-4 text-sm font-normal ' placeholder="Enter l'entreprise budget"/>
                                </label>
                                <label htmlFor="owner" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-11  flex w-full  p-[0.2rem]'>
                                    <input type="text" id='owner' name='owner' className='w-full h-full bg-brown-50 outline-none pl-4 text-sm font-normal ' placeholder="Enter le nom de propreiater"/>
                                </label>
                                <label htmlFor="phone" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-11  flex w-full  p-[0.2rem]'>
                                    <input type="text" id='phone' name='phone' className='w-full h-full bg-brown-50  outline-none pl-4 text-sm font-normal ' placeholder="Telephone"/>
                                </label>
                                <label htmlFor="phone" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-11 flex w-full  p-[0.2rem]'>
                                <select name="type" id="type" className='w-full h-full bg-brown-50 outline-none pl-4 text-sm font-normal '>
                                    <option value="petite">
                                        Petite
                                    </option>
                                </select>
                                </label>
                                <label htmlFor="phone" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-12 flex w-full  p-[0.2rem]'>
                                <button className='w-full font-amoera h-full cursor-pointer bg-brown-300 text-brown-50 '>
                                CREER
                               </button>
                                </label>
                               
                            </form>
                        </motion.div>)}
            </AnimatePresence>
        </>
    )
}

export default CreateContrat;