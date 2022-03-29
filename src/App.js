import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

// adding useSpring, animated for Animation
import { useSpring, animated } from "@react-spring/three";

function Cube(props) {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x += 0.01));
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  // adding scale object as variable
  const { scale } = useSpring({ scale: click ? 1.5 : 1 });

  return (
    <animated.mesh
      ref={mesh}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      onClick={(event) => setClick(!click)}
      scale={click ? 1.5 : 1}
      {...props}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hover ? "hotpink" : "pink"} />
    </animated.mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* cubes still stacked on top of each other */}
      <Cube position={[-1.2, 0, 0]} />
      <Cube position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default App;
