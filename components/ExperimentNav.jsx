'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'

export default function ExperimentNav() {

    const segment = useSelectedLayoutSegment()

    return (
        <nav className = 'z-20  flex flex-col bg-gray-200/75' >
            <Link href={'/'} className='hover:text-white hover:bg-midnight px-6'>Home</Link>
            <a href={'/experiments/grid'} className={`${segment === 'grid' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight' } px-6`}>
                Grid
            </a>
            <a href={'/experiments/waves'} className={`${segment === 'waves' ? 'bg-midnight text-white' : 'hover:text-white hover:bg-midnight'} px-6`}>
                Waves
            </a>
        </nav >
    )
}
