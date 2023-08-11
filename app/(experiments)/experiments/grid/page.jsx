"use client"
import * as THREE from 'three'
import { useRef, useLayoutEffect } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { OrbitControls, shaderMaterial } from '@react-three/drei'
import gridFragmentShader from '@/shaders/grid/gridFragmentShader.glsl'
import gridVertexShader from '@/shaders/grid/gridVertexShader.glsl'

const cubeDimension = 50 // dont make it too big
const length = Math.pow(cubeDimension, 3)
const tempObject = new THREE.Object3D()

const GridMaterial = shaderMaterial(
    {
        uTime: 0
    },
    gridVertexShader,
    gridFragmentShader
)

extend({ GridMaterial })

export default function Grid() {

    const meshRef = useRef()
    const geometryRef = useRef()
    const gridMaterial = useRef()

    useLayoutEffect(() => {
        let i = 0
        for (let x = 0; x < cubeDimension; x++) {
            for (let y = 0; y < cubeDimension; y++) {
                for (let z = 0; z < cubeDimension; z++) {
                    const id = i++
                    tempObject.position.set(
                        (cubeDimension / 2) - x,
                        (cubeDimension / 2) - y,
                        (cubeDimension / 2) - z
                    )
                    tempObject.updateMatrix()
                    meshRef.current.setMatrixAt(id, tempObject.matrix)
                }
            }
        }
        meshRef.current.instanceMatrix.needsUpdate = true
    }, [])

    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta * 0.2
        meshRef.current.rotation.x += delta * 0.05
        //geometryRef.current.rotateX(0.005)
        //geometryRef.current.rotateY(0.01)
        gridMaterial.current.uTime += delta
    })

    return (
        <>
            <OrbitControls />
            <instancedMesh ref={meshRef} args={[null, null, length]}>
                <boxGeometry ref={geometryRef} args={[0.15, 0.15, 0.15]}>
                </boxGeometry>
                <gridMaterial ref={gridMaterial} />
            </instancedMesh>
        </>
    )
}
