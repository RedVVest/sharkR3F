import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Shark } from "./Shark";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false}/>
      <Float floatIntensity={2} speed={3}>
        <Shark/>
      </Float>
      <Environment preset="sunset" background blur={0.4}/>
    </>
  );
};