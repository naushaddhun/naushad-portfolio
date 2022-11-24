import React from "react";
import { Center, Float, OrbitControls, Stars, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Perf } from "r3f-perf";
import Elements from "./Elements";
import Naushad from "../characters/Naushad";

const material = new THREE.MeshNormalMaterial();
export default function Home() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 15000,
          position: [0, -1, 15],
        }}
      >
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.5} />
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <Stars
          radius={70}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Center>
          <Float floatIntensity={10} rotationIntensity={1} speed={1}>
            <Text3D
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
        <Naushad
          url={"models/Waving.fbx"}
          position={[0, -30, -10]}
          rotation={[0, 0, 0]}
          scale={0.2}
          animate={true}
          look={true}
        />
        <Elements />
      </Canvas>
    </div>
  );
}
