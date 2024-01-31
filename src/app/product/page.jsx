"use client";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stage } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import Shoe from "@/components/Shoe";
import { CustomizationProvider } from "@/context/Customization";

export default function App() {
  return (
    <CustomizationProvider>
      <Canvas camera={{ position: [1, 0, -2] }}>
        <fog attach="fog" args={["#213547", 10, 20]} />
        <Stars />
        <Shoe />
        <Stage environment="city" />
      </Canvas>
    </CustomizationProvider>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#741b47"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
