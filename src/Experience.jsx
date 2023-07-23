import { OrbitControls, Stars } from '@react-three/drei'
import Shader from './Shader'

export default function Experience() {
    return <>
        <OrbitControls makeDefault />
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Stars radius={50} depth={10} count={5000} factor={4} saturation={0} fade speed={1} />
        <Shader/>
    </>
}







