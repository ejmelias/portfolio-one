"use client"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function page() {
    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.y += delta
        ref.current.rotation.x += delta
    })

    return (
        <>
            <mesh ref={ref}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    )
}

