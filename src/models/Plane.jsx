import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  // Fix: Destructure 'animations' (plural) from useGLTF
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  return (
    // Fix: Added space between mesh and props
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;