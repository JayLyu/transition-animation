import React, { useState, useEffect, useRef } from "react";
import "./TransitionAnimation.css";

const img1 =
  "https://gw.alicdn.com/bao/uploaded/i3/2206959856582/O1CN01047eSf1yUbnZR6b7o_!!0-item_pic.jpg";
const img2 =
  "https://gw.alicdn.com/bao/uploaded///asearch.alicdn.com/bao/uploaded/O1CN013HQHLr1PPYkN0IqcJ_!!6000000001833-0-yinhe.jpg";

const TransitionAnimation: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
  
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      if (showImage) {
        const image2 = new Image();
        image2.src = img2;
        // 使用本地图片的base64编码
        image2.onload = () => {
          ctx.drawImage(image2, 0, 0, canvas.width, canvas.height);
  
          // 将图片1逐渐转为粒子
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            if (Math.random() < 0.5) {
              // 将图片1的像素逐渐变为透明
              data[i + 3] = 0;
            }
          }
          ctx.putImageData(imageData, 0, 0);
        };
      } else {
        // 将图片1绘制为粒子
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
    }
  }, [showImage]);

  const handleButtonClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="app">
      <div className="container">
        <canvas
          ref={canvasRef}
          className={`canvas ${showImage ? "show" : ""}`}
        />
        <button onClick={handleButtonClick}>切换图片</button>
      </div>
    </div>
  );
};

export default TransitionAnimation;
