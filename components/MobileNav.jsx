"use client"
import { useState } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import MenuButton from '@/components/MenuButton'

export default function MobileNav() {
    const [navShow, setNavShow] = useState(false)
    const segment = useSelectedLayoutSegment()

    const onToggleNav = () => {
        setNavShow((status) => {
            if (status) {
                document.body.style.overflow = 'auto'
            } else {
                // Prevent scrolling
                document.body.style.overflow = 'hidden'
            }
            return !status
        })
    }

    return (
        <div className="md:hidden">
            <button
                type="button"
                className="h-9 w-9 rounded"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
            >
                <MenuButton />
            </button>
            <div
                className={`fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out  ${navShow ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="m-6 h-8 w-8"
                        aria-label="Toggle Menu"
                        onClick={onToggleNav}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="square" strokeLinejoin="square" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="fixed mt-8 h-full w-full justify-center text-center">
                    <div className={`px-12 py-4  ${segment === 'about' ? 'bg-midnight text-white' : ''}`}>
                        <Link
                            href={'/about'}
                            className={`text-3xl font-bold tracking-widest`}
                            onClick={onToggleNav}
                        >
                            ABOUT
                        </Link>
                    </div>
                    <div className={`px-12 py-4  ${segment === 'experiments' ? 'bg-midnight text-white' : ''}`}>
                        <Link
                            href={'/experiments'}
                            className={`text-3xl font-bold tracking-widest`}
                            onClick={onToggleNav}
                        >
                            EXPERIMENTS
                        </Link>
                    </div>
                    <div className={`px-12 py-4  ${segment === 'contact' ? 'bg-midnight text-white' : ''}`}>
                        <Link
                            href={'/contact'}
                            className={`text-3xl font-bold tracking-widest`}
                            onClick={onToggleNav}
                        >
                            CONTACT
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

