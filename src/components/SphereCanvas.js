import { Canvas } from "react-three-fiber";
import AnimatedSphere from "./AnimatedSphere";
import { OrbitControls } from "@react-three/drei";

const SphereCanvas = (props) => {
  return (
    <Canvas className="canvas">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <AnimatedSphere radius="1" width="100" height="500" scale="2" speed="10" />
    </Canvas>
  );
};

export default SphereCanvas;
