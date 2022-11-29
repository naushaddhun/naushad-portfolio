import { Center, Float, Text3D } from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { refsArray } from "../../framework/utils/refUtils";

const material = new THREE.MeshNormalMaterial();
export default function FloatingText() {
  const textRef = useRef();
  useEffect(() => {
    const isPresent = refsArray.findIndex((obj) => obj.name === "floatingText")
    if(textRef.current && isPresent === -1) refsArray.push(textRef.current)
  }, [textRef])
  return (
    <Center>
      <Float floatIntensity={10} rotationIntensity={1} speed={1}>
        <Text3D
          ref={textRef}
          name="floatingText"
          material={material}
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={10}
          bevelEnabled
          bevelThickness={0.1}
          bevelSize={0.05}
          bevelOffset={0}
          bevelSegments={5}
        >
          Curious Chad {"\n"}
          XR Enthusiast {"\n"}
          Full Stack Developer
        </Text3D>
      </Float>
    </Center>
  );
}
