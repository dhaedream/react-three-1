import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function App() {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
}

export default App;
