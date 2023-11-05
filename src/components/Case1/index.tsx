import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

const img1Url =
  "https://gw.alicdn.com/bao/uploaded/i3/2206959856582/O1CN01047eSf1yUbnZR6b7o_!!0-item_pic.jpg";
const img2Url =
  "https://gw.alicdn.com/bao/uploaded///asearch.alicdn.com/bao/uploaded/O1CN013HQHLr1PPYkN0IqcJ_!!6000000001833-0-yinhe.jpg";

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
        loadImage(img1Url),
        loadImage(img2Url),
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
      <canvas ref={canvasRef} />
      <button className="btn" onClick={handleButtonClick}>
        上传图片
      </button>
    </div>
  );
};

export default Case1;
