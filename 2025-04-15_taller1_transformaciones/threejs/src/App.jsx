import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedCube from "./AnimatedCube";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <AnimatedCube />
      <OrbitControls />
    </Canvas>
  );
}

export default App;