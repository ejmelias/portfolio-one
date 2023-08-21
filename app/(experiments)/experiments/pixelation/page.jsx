"use client"
import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { Grid, OrbitControls, Effects } from '@react-three/drei'
import { RenderPixelatedPass } from 'three-stdlib'

extend({ RenderPixelatedPass })

export default function page() {

    const gridProps = {
        cellSize: 1,
        cellThickness: 1,
        cellColor: '#6f6f6f',
        sectionSize: 3,
        sectionThickness: 1.5,
        sectionColor: '#c76300',
        fadeDistance: 25,
        fadeStrength: 1,
        followCamera: false,
        infiniteGrid: true
    }

    const { size, scene, camera } = useThree()
    const resolution = useMemo(() => new THREE.Vector2(size.width, size.height), [size])

    const centerRef = useRef()
    const coneRef = useRef()
    const boxRef = useRef()
    const tetRef = useRef()

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime()
        centerRef.current.rotation.z += delta * 0.5
        centerRef.current.rotation.x -= delta * 0.5

        coneRef.current.rotation.y += delta * 0.5
        coneRef.current.rotation.z += delta * 0.5
        coneRef.current.position.x = -Math.sin(time * 0.5) * 3
        coneRef.current.position.z = Math.cos(time * 0.5) * 3

        boxRef.current.rotation.y += delta * 0.5
        boxRef.current.rotation.z += delta * 0.5
        boxRef.current.position.x = Math.sin(time * 0.2) * 5
        boxRef.current.position.z = Math.cos(time * 0.2) * 5

        tetRef.current.rotation.y += delta * 0.1
        tetRef.current.rotation.z += delta * 0.2
        tetRef.current.position.x = Math.sin(time * 0.6) * 2
        tetRef.current.position.y = -Math.sin(time * 0.2) * 2
        tetRef.current.position.z = Math.cos(time * 0.6) * 2
    })

    return (
        <group scale={0.6} rotation={[0.3, 0, 0]}>
            <OrbitControls makeDefault />
            <spotLight position={[10, 10, 5]} angle={0.40} penumbra={1} />
            <ambientLight intensity={0.2} />

            <mesh castShadow ref={centerRef}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#ffb13d" />
            </mesh>

            <mesh castShadow ref={coneRef}>
                <coneGeometry args={[.5, 1, 8, 1]} />
                <meshStandardMaterial color="#d76cf5" />
            </mesh>

            <mesh castShadow ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#9ae3d5" roughness={1} />
            </mesh>

            <mesh castShadow ref={tetRef}>
                <tetrahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color="#5fad5f" />
            </mesh>

            <Grid position={[0, -2, 0]} args={[10.5, 10.5]} {...gridProps} rotation={[0, Math.PI, 0]}/>

            <Effects>
                <renderPixelatedPass args={[resolution, 10, scene, camera]} />
            </Effects>
        </group>
    )
}

