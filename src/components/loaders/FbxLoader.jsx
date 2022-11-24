import { useAnimations, useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

export default function FbxLoader(props) {
  const { url, position, rotation, scale, animate, look } = props;
  const ref = useRef();
  const groupRef = useRef();
  const character = useFBX(url);
  const { actions } = useAnimations(character.animations, ref);
  useEffect(() => {
    if (animate) actions["mixamo.com"].play();
  }, [character]);

    useFrame((state) => {
      if(look && groupRef) {
          groupRef.current.lookAt(state.camera.position)
      }
    })
  return (
    <group ref={groupRef} position={[0, 0, position[2]]}>
      <primitive
        ref={ref}
        dispose={null}
        object={character}
        position={position}
        rotation={rotation}
        scale={scale}
      />
    </group>
  );
}
