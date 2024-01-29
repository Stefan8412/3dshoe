"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Shoe from "@/components/Shoe";
import { lusitana } from "@/app/ui/fonts";

import { CustomizationProvider } from "@/context/Customization";
import Configurator from "@/components/Configurator";
import CanvasLoader from "@/components/CanvasLoader";

export default function Home() {
  return (
    <>
      <CustomizationProvider>
        <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5">
          <div className="flex w-full flex-col items-start justify-center p-8 text-center md:w-2/5 md:text-left">
            <p
              className={`${lusitana.className} w-full uppercase">shoes configurator`}
            >
              shoes configurator
            </p>
            <h1
              className={`${lusitana.className}my-4 text-2xl font-bold leading-tight`}
            >
              Xyndata
            </h1>
            <p
              className={`${lusitana.className} mb-8 text-2xl leading-normal">best shoes on market`}
            >
              best shoes on market
            </p>
          </div>
          <div className="w-full text-center md:w-3/5">
            <Canvas
              className="absolute flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
              shadows
              dpr={[1, 2]}
              camera={{ position: [0, 0, 4], fov: 50, zoom: 2 }}
            >
              <ambientLight intensity={0.3} />
              <spotLight
                intensity={0.3}
                angle={0.1}
                penumbra={1}
                position={[5, 25, 20]}
              />
              {/*imporove performance with loader */}
              <Suspense fallback={<CanvasLoader />}>
                <Shoe />
                <Environment preset="city" />
                <ContactShadows
                  rotation-x={Math.PI / 2}
                  position={[0, -0.8, 0]}
                  opacity={0.25}
                  width={10}
                  height={10}
                  blur={1.5}
                  far={0.8}
                />
              </Suspense>
              <OrbitControls enableZoom={true} />
            </Canvas>
            <Configurator />
          </div>
        </div>
      </CustomizationProvider>
    </>
  );
}
