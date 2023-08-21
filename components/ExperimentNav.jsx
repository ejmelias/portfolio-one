'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'

export default function ExperimentNav() {

    const segment = useSelectedLayoutSegment()

    return (
        <nav className = 'z-20 flex flex-col bg-gray-200/75 border border-midnight/50 divide-y divide-midnight/50' >
            <Link href={'/'} className='hover:text-white hover:bg-midnight px-6 flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="square" strokeLinejoin="square" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h10" />
                </svg>
                HOME
            </Link>
            <a href={'/experiments/instancing'} className={`${segment === 'instancin' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight' } px-6`}>
                INSTANCING
            </a>
            <a href={'/experiments/shaders'} className={`${segment === 'shaders' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'} px-6`}>
                SHADERS
            </a>
            <a href={'/experiments/fbo-particles'} className={`${segment === 'fbo-particles' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'} px-6`}>
                FBO PARTICLES
            </a>
            <a href={'/experiments/ascii'} className={`${segment === 'ascii' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'} px-6`}>
                ASCII
            </a>
            <a href={'/experiments/pixelation'} className={`${segment === 'pixelation' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'} px-6`}>
                PIXELATION
            </a>
        </nav >
    )
}
