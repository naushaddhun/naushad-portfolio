import React from "react";
import { Scroll, ScrollControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import Elements from "./Elements";
import Naushad from "../characters/Naushad";
import FloatingText from "./FloatingText";
import HandleScroll from "../scroll/HandleScroll";

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
        {/* <OrbitControls makeDefault /> */}
        <Stars
          radius={70}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <FloatingText />
        <Naushad
          url={"models/Waving.fbx"}
          name="Naushad"
          position={[0, -30, -10]}
          rotation={[0, 0, 0]}
          scale={0.2}
          animate={true}
          look={true}
        />
        <Elements />
        <ScrollControls
          pages={3} // Each page takes 100% of the height of the canvas
          distance={1} // A factor that increases scroll bar travel (default: 1)
          damping={4} // Friction, higher is faster (default: 4)
          horizontal={false} // Can also scroll horizontally (default: false)
          infinite={false} // Can also scroll infinitely (default: false)
        >
          <Scroll>
            <HandleScroll />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
