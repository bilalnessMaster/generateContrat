'use client'
import { logIn } from "@/utils/actions";

import { useActionState } from "react";

export default function Home() {

  const [errorMessage, formAction, isPending] = useActionState(logIn, undefined)

  return (
    <div className='min-h-screen w-full bg-brown-50 flex flex-col items-center     justify-center'>
      <div className="max-w-md w-full font-amoera items-center justify-center flex text-2xl mb-12 ">
        CONTRAT
      </div>
      <form action={formAction} className="max-w-md w-full space-y-2">
        <div className="flex flex-col gap-1">
          <span className="font-medium font-sans text-sm">Email</span>
          <label htmlFor="email" className=' font-sans   h-11 flex w-full border rounded'>
            <input type="text" id='email' name='email' className='w-full h-full focus:border-none border-brown border bg-white outline-none pl-4 text-sm font-normal ' placeholder="example@gmail.com" />
          </label>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium font-sans text-sm">Mot de passe</span>
          <label htmlFor="password" className=' font-sans   h-11 flex w-full border rounded'>
            <input type="text" id='password' name='password' className='w-full h-full focus:border-none border-brown border bg-white outline-none pl-4 text-sm font-normal ' placeholder="N8fWIh1V-YM" />
          </label>
        </div>
        {
          errorMessage && <p className="text-base text-red-500">
            {errorMessage}
          </p>
        }
        <input type="hidden" defaultValue={'http://localhost:3000/contrats'} name="redirectTo" />
        <button disabled={isPending} className="bg-brown-500 text-brown-50 w-full h-10  font-amoera font-medium cursor-pointer" type="submit">
          {
            isPending ? 'connecte ...' : " connexion"
          }
        </button>
      </form>
    </div>
  );
}
