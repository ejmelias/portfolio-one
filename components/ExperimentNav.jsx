'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'

export default function ExperimentNav() {

    const segment = useSelectedLayoutSegment()

    return (
        <nav className = 'z-20 flex flex-col bg-gray-200/75 border border-midnight/50 divide-y divide-midnight/50' >
            <Link href={'/'} className='hover:text-white hover:bg-midnight px-6 flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="square" strokeLinejoin="square" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h10" />
                </svg>
                Home
            </Link>
            <a href={'/experiments/grid'} className={`${segment === 'grid' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight' } px-6`}>
                Grid
            </a>
            <a href={'/experiments/waves'} className={`${segment === 'waves' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'} px-6`}>
                Waves
            </a>
            <a href={'/experiments/fbo-particles'} className={`${segment === 'fbo-particles' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'} px-6`}>
                FBO
            </a>
        </nav >
    )
}
