import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function AnimatedCube() {
  const meshRef = useRef();
  const { clock } = useThree();

  useFrame(() => {
    const t = clock.getElapsedTime();

    if (meshRef.current) {
      // Sinusoidal movement (Y and Z axis)
      meshRef.current.position.y = Math.sin(t) * 1.5;
      meshRef.current.position.z = Math.cos(t) * 1.5;

      // Rotation around its own axis
      meshRef.current.rotation.x = t;
      meshRef.current.rotation.y = t;

      // Smooth scaling. Pulsates between 0.7 and 1.3
      const scale = 1 + 0.3 * Math.sin(t * 2);
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}