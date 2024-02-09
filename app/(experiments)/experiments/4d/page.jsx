"use client"
import { OrbitControls, shaderMaterial } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import wavesFragmentShader from '@/shaders/waves/fragment.glsl'
import wavesVertexShader from '@/shaders/waves/vertex.glsl'
import { useControls } from 'leva'
import * as THREE from 'three'

const WaveMaterial = shaderMaterial(
    {
        uBigWavesElevation: 0.2,
        uBigWavesFrequency: new THREE.Vector3(4.0, 1.5, 0.5),
        uBigWavesSpeed: 0.75,
        uDepthColor: new THREE.Color('#263948'),
        uSurfaceColor: new THREE.Color('#b9d7de'),
        uColorOffset: 0.25,
        uColorMultiplier: 2,
        uSmallWavesElevation: 0.15,
        uSmallWavesFrequency: 3,
        uSmallWavesSpeed: 0.2,
        uSmallIterations: 4,
        uTime: 0
    },
    wavesVertexShader,
    wavesFragmentShader
)
extend({ WaveMaterial })

export default function Waves() {

    const materialProps = useControls({
        uBigWavesElevation: { value: 0.2, min: 0, max: 2, step: 0.01, label: "big wave elevation" },
        uBigWavesFrequency: { value: [4.0, 1.5, 0.5], max: 4, min: 0, label: "big wave frequency" },
        uBigWavesSpeed: { value: 0.75, min: 0, max: 4, step: 0.02, label: "big wave speed" },
        uSmallWavesElevation: { value: 0.15, min: 0, max: 1, step: 0.001, label: "small wave elevation" },
        uSmallWavesFrequency: { value: 3, min: 0, max: 30, step: 0.001, label: "small wave frequency" },
        uSmallWavesSpeed: { value: 0.2, min: 0, max: 4, step: 0.001, label: "small wave speed" },
        uSmallIterations: { value: 4, min: 0, max: 4, step: 1, label: "small wave iterations" },
        uDepthColor: { value: "#263948", label: "depth color" },
        uSurfaceColor: { value: "#b9d7de", label: "surface color" },
        uColorOffset: { value: 0.25, max: 1, min: 0, step: 0.001, label: "color offset" },
        uColorMultiplier: { value: 2, max: 10, min: 0, step: 0.001, label: "color multiplier" },

    })

    const waveMaterial = useRef()

    useFrame((state, delta) => {
        waveMaterial.current.uTime += delta
    })

    return (
        <>
            <OrbitControls />
            <mesh>
                <sphereGeometry args={[2, 512, 512]} />
                <waveMaterial ref={waveMaterial} {...materialProps} attach="material" />
            </mesh>
        </>
    )
}