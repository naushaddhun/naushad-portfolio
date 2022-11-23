import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
export default function Elements() {
  const donuts = useRef([]);
  const cubes = useRef([]);

  const { camera, scene } = useThree();

  let mouseX = 0,
    mouseY = 0;

  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;

  document.addEventListener("mousemove", onDocumentMouseMove);

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.05;
    mouseY = (event.clientY - windowHalfY) * 0.1;
  }

  useFrame((state, delta) => {
    camera.position.x += (mouseX - camera.position.x) * 0.005;
    // camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
    for (const cube of cubes.current) {
      cube.rotation.y += delta * 0.2;
    }
  });
  return (
    <>
      {[...Array(500)].map((value, index) => (
        <mesh
          ref={(element) => (donuts.current[index] = element)}
          key={index}
          geometry={torusGeometry}
          material={material}
          position={[
            Math.random() * 90 - 45,
            Math.random() * 90 - 45,
            Math.random() * 90 - 45,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <torusGeometry args={[1, 0.6, 16, 32]} />
        </mesh>
      ))}
      {[...Array(500)].map((value, index) => (
        <mesh
          ref={(element) => (donuts.current[index] = element)}
          key={index}
          geometry={boxGeometry}
          material={material}
          position={[
            Math.random() * 90 - 45,
            Math.random() * 90 - 45,
            Math.random() * 90 - 45,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      ))}
    </>
  );
}
