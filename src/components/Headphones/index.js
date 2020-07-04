import React , {Suspense, useContext, useRef} from "react";
import {ThemeContext} from 'styled-components'
import { Canvas, useLoader, useFrame, useThree } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Wrapper from '../Wrapper'
import useMusicPlayer from '../../hooks/useMusicPlayer'

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

function ArWing({color, isPlaying}) {
  const groupRef = useRef()
  const {clock} = useThree()
  useFrame(() => {
    groupRef.current.position.y = isPlaying ? 0.1 / Math.sin(clock.getElapsedTime()):  groupRef.current.position.y
  })
  const {nodes} = useLoader(GLTFLoader, "Headphones.glb");
  
console.log(nodes)
  return (
    <group ref={groupRef} position={isPlaying ? [-0.04,0.8,3] : [-0.04,1.2,1.1] }>
      <mesh visible geometry={nodes.Default.geometry}>
        {isPlaying ? <meshNormalMaterial
          attach="material"
          color={color}
          clearCoatRoughness={2}
          clearCoat={0.3}
          flatShading={false}
          

        /> : <meshBasicMaterial
          attach="material"
          color={color}
          clearCoatRoughness={2}
          clearCoat={0.3}
          flatShading={false}
          

        />}
        
      </mesh>
    </group>
  );
}

export default ()=> {
  const themeContext = useContext(ThemeContext)
  const {isPlaying} = useMusicPlayer()
  console.log(themeContext)
  return (
    // <Wrapper bg="blue" position="absolute" right="50%" height="30vmin" transform="translate(50%,-80%)">
    <Wrapper style={{pointerEvents:"none"}} width="100%" height="100%" position="absolute" left="0" top="0">
    <Canvas  >
      {/* <directionalLight intensity={5} /> */}
      <Suspense fallback={<Loading />}>
        <ArWing isPlaying={isPlaying} color={themeContext.colors.grayLight} />
      </Suspense>
    </Canvas>
    </Wrapper>
  );
}