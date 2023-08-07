"use client"
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Nav() {
    
    const segment = useSelectedLayoutSegment()

    return (
        <nav className="z-10 w-80 px-6 md:flex md:flex-col hidden">
            <Link
                href={'/about'}
                className="group rounded-lg"
            >   
                <h2 className={`px-3 text-1xl font-semibold justify-between flex flex-row items-center ${segment === 'about' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'}`}>
                    <span>ABOUT</span>
                    <span className='text-xs'>xx0</span>
                </h2> 
            </Link>

            <Link
                href={"/projects"}
                className="group rounded-lg "
            >
                <h2 className={`px-3 text-1xl font-semibold justify-between flex flex-row items-center ${segment === 'projects' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'}`}>
                    PROJECTS
                    <span className='text-xs'>xx1</span>
                </h2>
            </Link>

            <Link
                href={'/blog'}
                className="group rounded-lg "
            >
                <h2 className={`px-3 text-1xl font-semibold justify-between flex flex-row items-center ${segment === 'blog' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'}`}>
                    Blog
                    <span className='text-xs'>xx2</span>
                </h2>
            </Link>

            <Link
                href={"/contact"}
                className="group rounded-lg"
            >
                <h2 className={`px-3 text-1xl font-semibold justify-between flex flex-row items-center ${segment === 'contact' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'}`}>
                    CONTACT
                    <span className='text-xs'>xx3</span>
                </h2>
            </Link>
        </nav>
    )
}