'use client'
import arrow from '@/public/arrow.svg'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logout from '../Logout'
const links = [
    {
        id: 1,
        name: 'Contrats',
        href: "/contrats",
        icon: "hgi hgi-stroke hgi-seal"
    },
    // {
    //     id: 1,
    //     name: 'Clients',
    //     href: "/clients",
    //     icon: "hgi hgi-stroke hgi-link-04"
    // }
]
const Navbar = () => {
    return (
        <aside className='w-full h-full font-sans'>
            <nav className='h-full w-full border-r flex flex-col border-brown-100/40'>
                <section className='w-full h-14 border-b border-brown-100/40 flex items-center px-6'>
                    <h1 className='font-amoera text-2xl'>
                        CONTRAT
                    </h1>
                </section>
                <section className='flex flex-col  flex-grow text-lg'>
                    {
                        links.map(({ name, href, icon }, index) => (
                            <LinkComponent index={index} icon={icon} name={name} href={href} key={index} />
                        ))
                    }
                </section>
                <section className='h-14 border-t w-full border-brown-100/40 px-6 flex items-center' >
                     <Logout />
                </section>
            </nav>
        </aside>
    )
}

export default Navbar


const LinkComponent = ({ name, href, index }: { name: string, href: string, index: number, icon: string }) => {
    const pathName = usePathname()
    console.log(pathName);
    
    return (<Link
         key={index} 
         href={href}
          className={cn('px-6 py-6 w-full justify-between flex items-center gap-1 hover:bg-brown-100/5 transition-colors group/link' , {'bg-brown-100/10': pathName === href})}>
            <div className='flex items-center gap-1'>
         
            <span className={cn({'' : pathName !== href})}>{name}</span>
            </div>
            <Image src={arrow} alt='arrow image' className={cn('transition-all  duration-300', {" rotate-45": pathName === href})} />
          </Link>)
}