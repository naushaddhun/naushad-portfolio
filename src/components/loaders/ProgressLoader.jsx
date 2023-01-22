import { Html, useProgress } from "@react-three/drei"

export default function ProgressLoader() {
  const { progress } = useProgress()
  return (
    <>
      <color attach="background" args={["black"]} />
      <Html center>
        <div style={{ color: "white" }}>loading {progress.toFixed()} %</div>
      </Html>
    </>)
}