"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
    const [navShow, setNavShow] = useState(false)

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
                className="h-8 w-8 rounded"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="square" strokeLinejoin="square" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div
                className={`fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${navShow ? 'translate-x-0' : 'translate-x-full'}`}
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
                    <div className="px-12 py-4">
                        <Link
                            href={'/about'}
                            className="text-3xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                            onClick={onToggleNav}
                        >
                            About
                        </Link>
                    </div>
                    <div className="px-12 py-4">
                        <Link
                            href={'/services'}
                            className="text-3xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                            onClick={onToggleNav}
                        >
                            Services
                        </Link>
                    </div>
                    <div className="px-12 py-4">
                        <Link
                            href={'/blog'}
                            className="text-3xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                            onClick={onToggleNav}
                        >
                            Blog
                        </Link>
                    </div>
                    <div className="px-12 py-4">
                        <Link
                            href={'/contact'}
                            className="text-3xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                            onClick={onToggleNav}
                        >
                            Contact
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

