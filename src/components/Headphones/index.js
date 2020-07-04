import React , {Suspense} from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

function ArWing() {
  const {nodes} = useLoader(GLTFLoader, "scene.gltf");
// console.log(model.nodes)
  return (
    <group position={[0,0,-20]}>
      <mesh visible geometry={nodes.mesh_0.geometry}>
        <meshBasicMaterial
          attach="material"
          color="red"
          clearCoatRoughness={2}
          clearCoat={0.3}
          flatShading={false}
          

        />
      </mesh>
    </group>
  );
}

export default function App() {
  return (
    <Canvas >
      {/* <directionalLight intensity={5} /> */}
      <Suspense fallback={<Loading />}>
        <ArWing />
      </Suspense>
    </Canvas>
  );
}