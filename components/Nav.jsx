"use client"
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Nav() {
    
    const segment = useSelectedLayoutSegment()

    return (
        <nav className="z-10  w-64 px-6 md:flex md:flex-col hidden">
            <Link
                href={'/about'}
                className="group rounded-lg"
            >   
                <h2 className={`px-3 text-2xl font-semibold ${segment === 'about' ? 'bg-[#45517a] text-white' : 'hover:text-white hover:bg-[#45517a]'}`}>
                    ABOUT
                </h2>
            </Link>

            <Link
                href={"/projects"}
                className="group rounded-lg "
            >
                <h2 className={`px-3 text-2xl font-semibold ${segment === 'projects' ? 'bg-[#45517a] text-white' : 'hover:text-white hover:bg-[#45517a]'}`}>
                    PROJECTS
                </h2>
            </Link>

            <Link
                href={'/blog'}
                className="group rounded-lg "
            >
                <h2 className={`px-3 text-2xl font-semibold ${segment === 'blog' ? 'bg-[#45517a] text-white' : 'hover:text-white hover:bg-[#45517a]'}`}>
                    Blog
                </h2>
            </Link>

            <Link
                href={"/contact"}
                className="group rounded-lg"
            >
                <h2 className={`px-3 text-2xl font-semibold ${segment === 'contact' ? 'bg-[#45517a] text-white' : 'hover:text-white hover:bg-[#45517a]'}`}>
                    CONTACT
                </h2>
            </Link>
        </nav>
    )
}