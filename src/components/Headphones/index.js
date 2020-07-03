import React, {useRef,useEffect,useState} from 'react'
import {Canvas, useFrame, useThree} from 'react-three-fiber'
import { Shadow } from 'drei'
import {GLTFLoader} from  'three/examples/jsm/loaders/GLTFLoader'
import Wrapper from '../Wrapper'
// import useMusicPlayer from '../../hooks/useMusicPlayer'


const Headphones = () => {
    // const {isPlaying} = useMusicPlayer()
    const [model,setModel] = useState()
    useEffect(() =>{
        new GLTFLoader().load('scene.gltf', setModel)
    },[])
    console.log(model)
    return model ? <primitive object={model.scene} /> : null
    
}

const Scene = () => {

    
 
    const mesh = useRef()
    const { clock } = useThree()
    useFrame(() => {
        mesh.current.position.y = Math.sin(clock.getElapsedTime())
    })
    return(
        <>
        {/* <ambientLight /> */}
        {/* <pointLight position={[0, 20, 10]} intensity={5} color="white"/> */}
        {/* <directionalLight
      castShadow
      position={[2.5, 8, 5]}
      intensity={1.5}
    /> */}
        <group ref={mesh} >
        <mesh rotation={[0,0,0]} position={[0,0,-12]} receiveShadow castShadow>
            {/* <boxGeometry attach="geometry" args={[2,2,2]}/>                    
            <meshStandardMaterial attach="material" color="blue" /> */}
            <Headphones attach="material" color="blue" />
        </mesh>
        </group>
      <Shadow color="#C12020" scale={[4, 4, 1]} opacity={0.2} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        </>
    )
}

export default ()=> {
    return(
        <>
        <Wrapper position="absolute" top="0" right="50%" transform="translateX(50%)" width="20vw" height="20vw" >
        <Canvas>
            <Scene />
            
        </Canvas>
        
        </Wrapper>
        </>
    )
}