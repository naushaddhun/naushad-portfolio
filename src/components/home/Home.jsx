import React, { Suspense, useEffect, useState } from "react";
import { Center, Scroll, ScrollControls, Stars, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import Elements from "./Elements";
import Naushad from "../characters/Naushad";
import FloatingText from "./FloatingText";
import HandleScroll from "../scroll/HandleScroll";
import ProgressLoader from "../loaders/ProgressLoader";

const material = new THREE.MeshNormalMaterial();
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileCheck = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
    setIsMobile(isMobileCheck)
  }, [window.screen.width, window.screen.height])
  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: 55,
          right: 5,
          zIndex: 100
        }}
      >
        <a href="https://www.linkedin.com/in/naushaddhun/" target="_blank"><img src="images/linkedin.png" alt="LinkedIn" style={{ width: "25px", height: "25px" }} /></a>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 5,
          zIndex: 100
        }}
      >
        <a href="https://github.com/naushaddhun" target="_blank"><img src="images/GitHub-Mark.png" alt="Github" style={{ width: "25px", height: "25px", borderRadius: "50%" }} /></a>
      </div>
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
        <Suspense fallback={null}>
          <Canvas
            camera={{
              fov: 45,
              near: 0.1,
              far: 15000,
              position: [0, -1, 15],
            }}
          >
            <Suspense fallback={<ProgressLoader />}>
              <color attach="background" args={["black"]} />
              <ambientLight intensity={0.5} />
              {/* <Perf position="top-left" /> */}
              {/* <OrbitControls makeDefault /> */}
              <Stars
                radius={70}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1} />
              {!isMobile ? (
                <>
                  <FloatingText />
                  <Naushad
                    url={"models/Waving.fbx"}
                    name="Naushad"
                    position={[0, -30, -10]}
                    rotation={[0, 0, 0]}
                    scale={0.2}
                    animate={true}
                    look={true} />
                  <Elements />
                </>
              ) : (
                <Center>
                  <Text3D
                    // position={[0, 0, -50]}
                    name="floatingText"
                    material={material}
                    font="./fonts/helvetiker_regular.typeface.json"
                    size={0.75}
                    scale={0.4}
                    height={0.2}
                    curveSegments={10}
                    bevelEnabled
                    bevelThickness={0.1}
                    bevelSize={0.05}
                    bevelOffset={0}
                    bevelSegments={5}
                  >
                    Apologies!! {"\n"}
                    Mobile devices are {"\n"}
                    not yet fully supported.
                  </Text3D>
                </Center>
              )
              }
              {/* <ScrollControls
      pages={3} // Each page takes 100% of the height of the canvas
      distance={1} // A factor that increases scroll bar travel (default: 1)
      damping={4} // Friction, higher is faster (default: 4)
      horizontal={false} // Can also scroll horizontally (default: false)
      infinite={false} // Can also scroll infinitely (default: false)
    >
      <Scroll>
        <HandleScroll />
      </Scroll>
    </ScrollControls> */}
            </Suspense>
          </Canvas>
        </Suspense>
      </div></>
  );
}
