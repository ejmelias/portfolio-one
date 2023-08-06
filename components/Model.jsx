"use client"
import * as THREE from 'three'
import { useRef } from 'react'
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
    const { nodes } = useGLTF('./model.glb')
    const distortRef = useRef()
    const shadowRef = useRef()
    const sceneRef = useRef()

    useFrame((state, delta) => {
        distortRef.current.uTime += delta * 0.05
        shadowRef.current.uTime += delta
        //sceneRef.current.position.x = state.pointer.x
        //sceneRef.current.position.y = state.pointer.y
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
