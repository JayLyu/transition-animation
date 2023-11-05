import React, { useState, useEffect, useRef } from "react";
import style from "./index.module.scss";


import img1 from "../../imgs/img1.png";
import img2 from "../../imgs/img2.png";
import img3 from "../../imgs/img3.png";
import img4 from "../../imgs/img4.png";

const Case1: React.FC = () => {
  const [showImage, setShowImage] = useState(true);
  const [img1Base64, setImg1Base64] = useState<string | null>(null);
  const [img2Base64, setImg2Base64] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const loadImage = async (url: string): Promise<string> => {
      const response = await fetch(url);
      const blob = await response.blob();
      const reader = new FileReader();
      return new Promise<string>((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(blob);
      });
    };

    const loadImages = async () => {
      const [img1DataUrl, img2DataUrl] = await Promise.all([
        loadImage(img1),
        loadImage(img2),
      ]);
      setImg1Base64(img1DataUrl);
      setImg2Base64(img2DataUrl);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (img1Base64 && img2Base64) {
        const image = new Image();
        image.src = showImage ? img1Base64 : img2Base64;
        image.onload = () => {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

          if (showImage) {
            for (let i = 0; i < 1000; i++) {
              const x = Math.random() * canvas.width;
              const y = Math.random() * canvas.height;
              const radius = Math.random() * 5;
              const opacity = Math.random();

              ctx.beginPath();
              ctx.arc(x, y, radius, 0, 2 * Math.PI);
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
              ctx.fill();
            }
          }
        };
      }
    }
  }, [showImage, img1Base64, img2Base64]);

  const handleButtonClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="container">
      <h4>Case 1</h4>
      <div className={style.box}>
        <canvas ref={canvasRef} />
      </div>
      <button className="btn" onClick={handleButtonClick}>
        上传图片
      </button>
    </div>
  );
};

export default Case1;
