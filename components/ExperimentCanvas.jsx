"use client"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function ExperimentCanvas({ children }) {
    return (
        <div className='fixed w-screen h-screen m-0 p-0'>
            <Suspense fallback={<LoadingSpinner colour="#45517a"/>}>
                <Canvas camera={{ fov: 60 }} gl={{ localClippingEnabled: true }} shadows>
                    {children}
                </Canvas>
            </Suspense>
        </div>
    )
}