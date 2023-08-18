"use client"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Html } from "@react-three/drei"

export default function page() {
    const ref = useRef()
    const meshRef = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.y += delta
        ref.current.rotation.x += delta
    })

    return (
        <group ref={ref}>
            <Html transform position={[0, 1, 0]} scale={0.5}>
                Please select
            </Html>
            <mesh ref={meshRef}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </group>
    )
}

