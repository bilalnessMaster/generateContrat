'use client'
import React, { useActionState, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { createContrat, State } from '@/utils/actions'

const CreateContrat = () => {
    const [isOpen, setIsOpen] = useState(false)
    const initialState: State = { message: null, errors: {} }
    const [state, formAction] = useActionState(createContrat, initialState)
    return (
        <main>
            <button onClick={() => setIsOpen(!isOpen)} className='font-amoera text-lg flex items-center h-12  gap-1 cursor-pointer justify-center'>
                <span className='bg-brown-100/75 text-brown-400 flex items-center h-8  w-32 justify-center rounded-full '>
                    <span className='font-sans uppercase text-base'>creer</span>
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
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            onClick={() => setIsOpen(!isOpen)} className='z-20 fixed inset-0 bg-black/10 backdrop-blur-xs'></motion.div>
                    )
                }
            </AnimatePresence>
            <AnimatePresence >
                {isOpen &&
                    (<motion.div
                        initial={{
                            y: 200
                        }}
                        animate={{
                            y: 0
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
                            <button className='' type='button' onClick={() => setIsOpen(!isOpen)}>
                                <i className="hgi hgi-stroke hgi-cancel-01 text-xl"></i>
                            </button>
                        </div>
                        <form action={formAction} className='space-y-1'>
                            <label htmlFor="entreprise" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-11 flex w-full  p-[0.2rem]'>
                                <input type="text" id='nomEntreprise' name='nomEntreprise' className='w-full h-full bg-brown-50 outline-none pl-4 text-sm font-normal ' placeholder="Enter le de l'enterprise" />
                            </label>
                            {state?.errors?.nomEntreprise && state.errors.nomEntreprise.map((error: string) => (
                                <p className=" text-xs text-brown-500" key={error}>
                                    {error}
                                </p>)
                            )
                            }
                            <label htmlFor="budget" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-11  flex w-full  p-[0.2rem]'>
                                <input type="number" id='budget' name='budget' className='w-full h-full bg-brown-50 outline-none pl-4 text-sm font-normal ' placeholder="Enter l'entreprise budget" />
                            </label>
                            {state?.errors?.budget && state.errors.budget.map((error: string) => (
                                <p className=" text-xs text-brown-500" key={error}>
                                    {error}
                                </p>)
                            )
                            }
                            <label htmlFor="owner" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-11  flex w-full  p-[0.2rem]'>
                                <input type="text" id='owner' name='owner' className='w-full h-full bg-brown-50 outline-none pl-4 text-sm font-normal ' placeholder="Enter le nom de propreiater" />
                            </label>
                            {state?.errors?.owner && state.errors.owner.map((error: string) => (
                                <p className=" text-xs text-brown-500" key={error}>
                                    {error}
                                </p>)
                            )
                            }
                            <label htmlFor="phone" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-11  flex w-full  p-[0.2rem]'>
                                <input type="text" id='phone' name='phone' className='w-full h-full bg-brown-50  outline-none pl-4 text-sm font-normal ' placeholder="Telephone" />
                            </label>
                            {state?.errors?.phone && state.errors.phone.map((error: string) => (
                                <p className=" text-xs text-brown-500" key={error}>
                                    {error}
                                </p>)
                            )
                            }
                            <label htmlFor="typeEntreprise" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-11 flex w-full  p-[0.2rem]'>
                                <select name="typeEntreprise" id="type" className='w-full h-full bg-brown-50 outline-none pl-4 text-sm font-normal '>
                                    <option value="petite">
                                        Petite
                                    </option>
                                    <option value="moyenne">
                                        moyenne
                                    </option>
                                    <option value="grande">
                                        Grande
                                    </option>
                                </select>
                            </label>
                            {state?.errors?.typeEntreprise && state.errors.typeEntreprise.map((error: string) => (
                                <p className=" text-xs text-brown-500" key={error}>
                                    {error}
                                </p>)
                            )
                            }
                            <label htmlFor="btn" className=' font-sans  focus-within:bg-brown-200/40 transition-all  h-12 flex w-full  p-[0.2rem]'>
                                <button className='w-full font-amoera h-full cursor-pointer bg-brown-300 text-brown-50 '>
                                    CREER
                                </button>
                            </label>

                        </form>
                    </motion.div>)}
            </AnimatePresence>
        </main>
    )
}

export default CreateContrat;


