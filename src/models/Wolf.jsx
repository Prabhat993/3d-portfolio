// src/models/Wolf.jsx
import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import wolfScene from '../assets/3d/hell_wolf.glb';

const Wolf = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(wolfScene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Find and play the first animation in the list (usually the run cycle)
    const animationName = Object.keys(actions)[0];
    if (animationName) {
      actions[animationName].play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="wolfFBX" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.wolf_mtrl}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Wolf;