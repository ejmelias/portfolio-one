"use client"
import { useRef, useEffect, forwardRef } from "react"
import { AsciiRenderer, useAnimations, useGLTF, OrbitControls} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Page() {

    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.2
    })

    return (
        <>
            <OrbitControls />
            <color attach="background" args={['black']} />
            <AsciiRenderer bgColor="transparent" fgColor="black" resolution={.15}/>
            <spotLight position={[10, 10, 5]} angle={0.40} penumbra={1} />
            <pointLight position={[-10, -10, -15]} />
            <Model position={[-1, -2.2, -1.5]} scale={1.2} ref={ref}/>
        </>
    )
}


const Model = forwardRef((props, ref) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("/Husky.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        actions?.Idle.play()
    })

    return (
        <group ref={ref} {...props}>
            <group ref={group}  dispose={null} >
                <group name="Scene">
                    <group name="RootNode">
                        <group
                            name="AnimalArmature"
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={100}
                        >
                            <group name="Cube">
                                <skinnedMesh
                                    name="Cube001"
                                    geometry={nodes.Cube001.geometry}
                                    material={materials["Material.001"]}
                                    skeleton={nodes.Cube001.skeleton}
                                />
                                <skinnedMesh
                                    name="Cube001_1"
                                    geometry={nodes.Cube001_1.geometry}
                                    material={materials["Material.002"]}
                                    skeleton={nodes.Cube001_1.skeleton}
                                />
                                <skinnedMesh
                                    name="Cube001_2"
                                    geometry={nodes.Cube001_2.geometry}
                                    material={materials["Material.006"]}
                                    skeleton={nodes.Cube001_2.skeleton}
                                />
                                <skinnedMesh
                                    name="Cube001_3"
                                    geometry={nodes.Cube001_3.geometry}
                                    material={materials["Material.003"]}
                                    skeleton={nodes.Cube001_3.skeleton}
                                />
                                <skinnedMesh
                                    name="Cube001_4"
                                    geometry={nodes.Cube001_4.geometry}
                                    material={materials["Material.004"]}
                                    skeleton={nodes.Cube001_4.skeleton}
                                />
                            </group>
                            <primitive object={nodes.Body} />
                            <primitive object={nodes.IKBackLegL} />
                            <primitive object={nodes.IKFrontLegL} />
                            <primitive object={nodes.IKBackLegR} />
                            <primitive object={nodes.IKFrontLegR} />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
})

