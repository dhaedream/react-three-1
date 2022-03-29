import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Cube(props) {
  const mesh = useRef();
  return <Mesh></Mesh>;
}

function App() {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
}

export default App;
