"use client"
import { useRef } from "react"
import { AsciiRenderer, useGLTF} from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

export default function Page() {

    const viewport = useThree((state) => state.viewport)
    const ref = useRef()
    const { nodes } = useGLTF('../david.glb')
    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.2
    })

    return (
        <>
            <color attach="background" args={['black']} />
            <AsciiRenderer bgColor="transparent" fgColor="black" resolution={.2}/>
            <spotLight position={[10, 10, 5]} angle={0.40} penumbra={1} />
            <pointLight position={[-10, -10, -15]} />
            <mesh ref={ref} position={[0, 0, -5]} geometry={nodes.david.geometry} scale={Math.min(viewport.width, viewport.height) * 0.04}>
                <meshStandardMaterial color="white" />
            </mesh>
        </>
    )
}