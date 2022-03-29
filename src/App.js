import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Cube(props) {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x += 0.01));
  const [hover, setHover] = useState(false);
  // adding click setstate
  const [click, setClick] = useState(false);

  return (
    <mesh
      ref={mesh}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      // click logic to start false or not actiive/ clicked
      onClick={(event) => setClick(!click)}
      // if its active scale up n vice versa
      scale={click ? 1.5 : 1}
    >
      <boxGeometry args={[2, 2, 2]} />
      {/* if hover is tru=> hotpink, if falsey=> pink */}
      <meshStandardMaterial color={hover ? "hotpink" : "pink"} />
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
