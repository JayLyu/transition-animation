import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, SphereGeometry, Vector3, MeshStandardMaterial, Color } from "three";
import { makeNoise3D } from 'open-simplex-noise';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTexture } from "@react-three/drei"

gsap.registerPlugin(useGSAP);


const Sphere: React.FC = () => {
  const mesh = useRef<Mesh>(new Mesh());
  const [hovered, setHovered] = useState<boolean>(false);
  const noise3D = makeNoise3D(Date.now());
  const sphereGeometry = new SphereGeometry(1, 64, 64);

  const props = useTexture({
    map: 'https://cdn.polyhaven.com/asset_img/primary/rosendal_park_sunset_puresky.png?height=760',
  })

  const material = useRef(new MeshStandardMaterial({
    // envMap: envMap, 
    metalness: 0.65, 
    roughness: 0.8,
    // ...props
  }))

  
  
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime();
      const perturbSpeed = hovered ? 0.2 : 0.05

      const position = sphereGeometry.attributes.position;
      const vertex = new Vector3();
      for (let i = 0; i < position.count; i++) {
        vertex.fromBufferAttribute(position, i);
        const perturbation = noise3D(vertex.x + time, vertex.y + time, vertex.z + time)
        vertex.normalize().multiplyScalar(1 + perturbation * perturbSpeed);
        position.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }

      position.needsUpdate = true;
      sphereGeometry.computeVertexNormals();
      sphereGeometry.attributes.normal.needsUpdate = true;
      // console.log(`perturbSpeed: ${perturbSpeed}`)

      // Change color over time.
      const color = new Color(`hsl(${((time * 40) % 360)}, 50%, 50%)`);
      const color2 = new Color(`hsl(${((time / 40) % 360)}, 10%, 10%)`);
      
      material.current.color = color;
      material.current.emissive = color2;
    }
  });

  const handlePointerOver = () => {
    setHovered(true)
  }

  const handlePointerOut = () => {
    setHovered(false)
  }

  return (
    <mesh 
      ref={mesh} 
      scale={1}
      geometry={sphereGeometry}
      material={material.current}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
};

export default Sphere;