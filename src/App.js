import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Cube(props) {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"pink"} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      {/* thelights */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
}

export default App;
