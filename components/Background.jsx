"use client"
import { Canvas } from '@react-three/fiber'
import Model from '@/components/Model'
import { Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Background() {
    return (
        <div className='fixed w-screen h-screen m-0 p-0'>
            <Suspense fallback={<LoadingSpinner />}>
                <Canvas camera={{ fov: 35 }}>
                    <Model />
                </Canvas>
            </Suspense>
        </div>
    )
}