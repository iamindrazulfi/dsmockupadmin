import * as THREE from "three"
import { useGLTF, PerspectiveCamera, useTexture } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
    nodes: {
        screenMesh1: THREE.Mesh
        screenMesh2?: THREE.Mesh
        screenMesh3?: THREE.Mesh
        screenMesh4?: THREE.Mesh
        Camera: THREE.Camera
        Camera_Orientation: THREE.PerspectiveCamera
    }

    materials: {
        screenMtl1: THREE.MeshStandardMaterial
        screenMtl2?: THREE.MeshStandardMaterial
        screenMtl3?: THREE.MeshStandardMaterial
        screenMtl4?: THREE.MeshStandardMaterial
    }
}

interface Props {
    imageMap1?: string
    imageMap2?: string
    imageMap3?: string
    imageMap4?: string
    gltfUrl: string
}

export default function Model({ imageMap1, imageMap2, imageMap3, imageMap4, gltfUrl }: Props) {
    const { nodes, materials } = useGLTF(gltfUrl) as GLTFResult
    const newTexture1 = imageMap1 as string
    const newTexture2 = imageMap2 as string
    const newTexture3 = imageMap3 as string
    const newTexture4 = imageMap4 as string
    const texture1 = useTexture(newTexture1)
    const texture2 = useTexture(newTexture2)
    const texture3 = useTexture(newTexture3)
    const texture4 = useTexture(newTexture4)

    return (
        <group dispose={null}>
            <group
                position={[nodes.Camera.position.x, nodes.Camera.position.y, nodes.Camera.position.z]}
                rotation={[nodes.Camera.rotation.x, nodes.Camera.rotation.y, nodes.Camera.rotation.z]}
            >
                <PerspectiveCamera
                    makeDefault={true}
                    far={nodes.Camera_Orientation.far}
                    near={nodes.Camera_Orientation.near}
                    fov={nodes.Camera_Orientation.fov}
                    rotation={[
                        nodes.Camera_Orientation.rotation.x,
                        nodes.Camera_Orientation.rotation.y,
                        nodes.Camera_Orientation.rotation.z,
                    ]}
                />
            </group>
            {nodes.screenMesh1 ? (
                <mesh
                    geometry={nodes.screenMesh1.geometry}
                    material={materials.screenMtl1}
                    position={[nodes.screenMesh1.position.x, nodes.screenMesh1.position.y, nodes.screenMesh1.position.z]}
                    rotation={[nodes.screenMesh1.rotation.x, nodes.screenMesh1.rotation.y, nodes.screenMesh1.rotation.z]}
                    scale={nodes.screenMesh1.scale.x}
                >
                    <meshStandardMaterial attach="material" map={texture1} transparent />
                </mesh>
            ) : null}
            {nodes.screenMesh2 ? (
                <mesh
                    geometry={nodes.screenMesh2.geometry}
                    material={materials.screenMtl2}
                    position={[nodes.screenMesh2.position.x, nodes.screenMesh2.position.y, nodes.screenMesh2.position.z]}
                    rotation={[nodes.screenMesh2.rotation.x, nodes.screenMesh2.rotation.y, nodes.screenMesh2.rotation.z]}
                    scale={nodes.screenMesh2.scale.x}
                >
                    <meshStandardMaterial attach="material" map={texture2} transparent />
                </mesh>
            ) : null}
            {nodes.screenMesh3 ? (
                <mesh
                    geometry={nodes.screenMesh3.geometry}
                    material={materials.screenMtl3}
                    position={[nodes.screenMesh3.position.x, nodes.screenMesh3.position.y, nodes.screenMesh3.position.z]}
                    rotation={[nodes.screenMesh3.rotation.x, nodes.screenMesh3.rotation.y, nodes.screenMesh3.rotation.z]}
                    scale={nodes.screenMesh3.scale.x}
                >
                    <meshStandardMaterial attach="material" map={texture3} transparent />
                </mesh>
            ) : null}
            {nodes.screenMesh4 ? (
                <mesh
                    geometry={nodes.screenMesh4.geometry}
                    material={materials.screenMtl4}
                    position={[nodes.screenMesh4.position.x, nodes.screenMesh4.position.y, nodes.screenMesh4.position.z]}
                    rotation={[nodes.screenMesh4.rotation.x, nodes.screenMesh4.rotation.y, nodes.screenMesh4.rotation.z]}
                    scale={nodes.screenMesh4.scale.x}
                >
                    <meshStandardMaterial attach="material" map={texture4} transparent />
                </mesh>
            ) : null}
        </group>
    )
}
