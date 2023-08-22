"use client"
import * as THREE from 'three'
import {  CameraControls, MeshPortalMaterial, Text, useGLTF, GradientTexture, AccumulativeShadows, RandomizedLight } from "@react-three/drei"

const zPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
const yPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 1)

export default function page() {

    return (
        <group scale={1.5}>
            <color attach="background" args={['#f0f0f0']} />
            <Frame id="01" name="friend" >
                <mesh position={[0, 0, -1.2]} scale={20}>
                    <planeGeometry/>
                    <meshBasicMaterial>
                        <GradientTexture
                            stops={[0.3, 0.6]} // As many stops as you want
                            colors={['orange', 'aquamarine']} // Colors need to match the number of stops
                            size={1024} // Size is optional, default = 1024
                        />
                    </meshBasicMaterial>
                </mesh>
                <mesh>
                    <Model position={[0, -0.5, -0.1]} rotation={[0, -Math.PI / 2, 0]} scale={1.5} castShadow/>
                </mesh>
                <AccumulativeShadows temporal frames={100} scale={10} position={[0, -0.5, 0]}>
                    <RandomizedLight amount={3} position={[5, 5, -10]} />
                </AccumulativeShadows>
            </Frame>
            <Model position={[0, -0.5, -0.1]} rotation={[0, -Math.PI / 2, 0]} scale={1.5} clip/>
            <CameraControls makeDefault minAzimuthAngle={-Math.PI / 2.5} maxAzimuthAngle={Math.PI / 2.5} minPolarAngle={0.5} maxPolarAngle={Math.PI / 2} />
        </group>
    )
}

function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
    return (
        <group {...props}>
            <Text  color="black" fontSize={0.25} letterSpacing={-0.025} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]}>
                {name}
            </Text>
            <Text color="black" fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]}>
                /{id}
            </Text>
            <Text color="black" fontSize={0.04} anchorX="left" position={[0.0, -0.677, 0.01]}>
                {author}
            </Text>
            <mesh name={id}>
                <planeGeometry args={[width, height]} />
                <MeshPortalMaterial >{children}</MeshPortalMaterial>
            </mesh>
            <mesh name={id} position={[0, 0, -0.001]}>
                <planeGeometry args={[width + 0.05, height + 0.05]} />
                <meshBasicMaterial color="black" />
            </mesh>
        </group>
    )
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Frank.Zwick (https://sketchfab.com/Frank_Zwick)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/dog-a-1of6-for-free-happy-new-year-2022-59558a57beaa4bd681eaed98a03dbea0
Title: DOG A - 1of6 - for free // happy new year 2022
*/
function Model({clip, ...props}) {
    const { nodes, materials } = useGLTF("/lab.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DOG_Anton_E_mat27_0.geometry}
                scale={0.01}
            >
                <meshBasicMaterial map={materials.mat27.map} side={THREE.DoubleSide} clippingPlanes={clip ? [zPlane, yPlane] : null} />
            </mesh>
        </group>
    );
}





