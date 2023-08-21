"use client"
import { useRef, useEffect } from "react"
import { AsciiRenderer, useAnimations, useGLTF} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Page() {

    return (
        <>
            <color attach="background" args={['black']} />
            <AsciiRenderer bgColor="transparent" fgColor="black" resolution={.15}/>
            <spotLight position={[10, 10, 5]} angle={0.40} penumbra={1} />
            <pointLight position={[-10, -10, -15]} />
            <Model position={[0, -2.2, -1]} scale={1.2}/>
        </>
    )
}

function Model(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("../Husky.glb")
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        actions?.Idle.play()
    },[])

    useFrame((state, delta) => {
        group.current.rotation.y += delta * 0.2;
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Root_Scene">
                <group name="RootNode">
                    <group
                        name="AnimalArmature"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <primitive object={nodes.Body} />
                        <primitive object={nodes.IKBackLegL} />
                        <primitive object={nodes.IKFrontLegL} />
                        <primitive object={nodes.IKBackLegR} />
                        <primitive object={nodes.IKFrontLegR} />
                    </group>
                    <group
                        name="Cube"
                        position={[0, 0, 0.062]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <skinnedMesh
                            name="Cube_1"
                            geometry={nodes.Cube_1.geometry}
                            material={materials.Material}
                            skeleton={nodes.Cube_1.skeleton}
                        />
                        <skinnedMesh
                            name="Cube_2"
                            geometry={nodes.Cube_2.geometry}
                            material={materials["Material.001"]}
                            skeleton={nodes.Cube_2.skeleton}
                        />
                        <skinnedMesh
                            name="Cube_3"
                            geometry={nodes.Cube_3.geometry}
                            material={materials["Material.006"]}
                            skeleton={nodes.Cube_3.skeleton}
                        />
                        <skinnedMesh
                            name="Cube_4"
                            geometry={nodes.Cube_4.geometry}
                            material={materials["Material.003"]}
                            skeleton={nodes.Cube_4.skeleton}
                        />
                        <skinnedMesh
                            name="Cube_5"
                            geometry={nodes.Cube_5.geometry}
                            material={materials["Material.002"]}
                            skeleton={nodes.Cube_5.skeleton}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload("../Husky.glb")