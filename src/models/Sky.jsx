// Sky.jsx

import { useGLTF } from "@react-three/drei";
import React from 'react'
import {useRef} from 'react'
import  {useFrame} from '@react-three/fiber'

// ❌ REMOVE THIS LINE: import skyScene from "../assets/sky/scene.gltf"
import skyScene from "../assets/3d/sky.glb"
const Sky = ({isRotating}) => {
  // ✅ PASS THE PUBLIC PATH AS A STRING
  const sky = useGLTF(skyScene); 
  const skyRef = useRef();
  useFrame((_,delta)=>{
    if(isRotating){
      skyRef.current.rotating.y+=0.15*delta
    }
  })
  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky