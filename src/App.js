import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Cube(props) {
  const mesh = useRef();
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color={"pink"} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
}

export default App;
