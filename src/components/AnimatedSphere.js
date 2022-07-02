import React from "react";
import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei/core";

const AnimatedSphere = (props) => {
  return (
    <Sphere
      visible
      args={[props.radius, props.width, props.height]}
      scale={props.scale}
    >
      <MeshDistortMaterial color="#8352FD" attach="material" distort={0.3} speed={props.speed} roughness={0}/>
    </Sphere>
  );
};

export default AnimatedSphere;
