import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Cube(props) {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x += 0.01));

  const [hover, setHover] = useState(false);

  return (
    <mesh
      ref={mesh}
      // using a handeler to + arrow function to interact on hover
      onPointerOver={(event) => setHover(true)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"pink"} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
}

export default App;
