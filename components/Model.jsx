"use client"
import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { Html, shaderMaterial, useGLTF } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import distortFragment from '@/shaders/distortFragment.glsl'
import distortVertex from '@/shaders/distortVertex.glsl'
import shadowFragment from '@/shaders/shadowFragment.glsl'
import shadowVertex from '@/shaders/shadowVertex.glsl'

const DistortMaterial = shaderMaterial(
    {
        uTime: 0
    },
    distortVertex,
    distortFragment
)
extend({ DistortMaterial })

const ShadMaterial = shaderMaterial(
    {
        uTime: 0
    },
    shadowVertex,
    shadowFragment
)
extend({ ShadMaterial })

export default function Model() {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const { nodes } = useGLTF('./model.glb')
    const distortRef = useRef()
    const shadowRef = useRef()
    const sceneRef = useRef()

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const handleMouseMove = (event) => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Calculate normalized mouse position
        setMouseX(event.clientX / screenWidth - 0.5)
        setMouseY(event.clientY / screenHeight - 0.5)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    useFrame((state, delta) => {
        distortRef.current.uTime += delta * 0.05
        shadowRef.current.uTime += delta

        sceneRef.current.rotation.y += ((mouseX)/3 - sceneRef.current.rotation.y) * 0.001
        sceneRef.current.rotation.x += ((mouseY)/3 - sceneRef.current.rotation.x) * 0.001

        sceneRef.current.position.y += ((mouseY) - sceneRef.current.position.y) * 0.01
        sceneRef.current.position.x += ((mouseX) - sceneRef.current.position.x) * 0.01
    })

    return (
        <group ref={sceneRef} >
            <group position={[1, -1, -5]} rotation={[0.2, -0.02, 0]} >

                <group rotation={[0, Math.PI / 8, 0]} position={[0, 0, -5]}>
                    <mesh geometry={nodes.Plane.geometry}>
                        <distortMaterial ref={distortRef} />
                    </mesh>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} >
                        <planeGeometry args={[12, 2]} />
                        <shadMaterial ref={shadowRef} transparent />
                    </mesh>
                </group>

                <group rotation={[0, Math.PI / 5, 0]}>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.1, 0]}>
                        <planeGeometry args={[20, 20]} />
                        <meshLambertMaterial />
                    </mesh>
                    <mesh rotation={[0, -Math.PI / 2, 0]} position={[10, 6.9, 0]}>
                        <planeGeometry args={[20, 20]} />
                        <meshLambertMaterial />
                    </mesh>
                    <mesh position={[0, 6.9, -10]}>
                        <planeGeometry args={[20, 20]} />
                        <meshLambertMaterial />
                    </mesh>
                </group>
                <directionalLight position={[-8.8, 4, 4.4]} />
                <ambientLight />
            </group>
        </group>
    )
}
