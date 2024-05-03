'use client'

import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei'

import { Color, LinearFilter, RGBFormat, Texture, CubeTextureLoader } from 'three';
import Sphere from './components/Sphere';

// 创建用于背景的画布并返回:返回的纹理
const createGradientTexture = (color1: string, color2: string): Texture => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const gradient = ctx.createLinearGradient(0,0, canvas.width, canvas.height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
    
  const texture = new Texture(canvas);
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.format = RGBFormat;
  texture.needsUpdate = true;

  return texture;
};

const GradientBackground = ({ color1, color2 }: { color1: string, color2: string }) => {
  const { gl, scene } = useThree();
  
  useEffect(() => {
    const texture = createGradientTexture(color1, color2);
    scene.background = texture;
    
    return () => {
      scene.background = new Color(0x000000);
      gl.setClearAlpha(1);
    };
  }, [gl, scene, color1, color2]);
  
  return null;
};

// Metals texture
// const path = hdr
// const urls = [path, path, path, path, path, path]

const R3F: React.FC = () => {
  return (
    <Canvas>
      <Stage environment="studio" intensity={0.6}>
        {/* <ambientLight intensity={1} /> */}
        {/* <directionalLight intensity={5} color="white" position={[0, 0, 5]} /> */}
        {/* <pointLight intensity={5} position={[10, 10, 10]} /> */}
        {/* <spotLight position={[0, 5, 10]} angle={0.3} /> */}
        {/* <GradientBackground color1="#ff0000" color2="#ff0036" /> */}
        <Sphere />
      </Stage>
      <BakeShadows />
      <OrbitControls makeDefault 
      autoRotate 
      />
    </Canvas>
  );
};

export default R3F;