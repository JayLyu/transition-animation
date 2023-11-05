import React, { useEffect, useRef, useState, useCallback } from "react";
import style from "./index.module.scss";

import img1Url from "../../imgs/img1.png";
import img2Url from "../../imgs/img2.png";
import img3Url from "../../imgs/img3.png";
import img4Url from "../../imgs/img4.png";


function clamp(min: number, mid: number, max: number): number {
  return mid < min ? min : mid < max ? mid : max;
}

const Case2: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const newCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [state, setState] = useState({ pos: 0 });
  const [settings] = useState({ cols: 50, rows: 50 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [image2Loaded, setImage2Loaded] = useState(false);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [img2, setImg2] = useState<HTMLImageElement | null>(null);

  const renderTempCanvas = (
    context: CanvasRenderingContext2D,
    newContext: CanvasRenderingContext2D
  ): void => {
    newContext.clearRect(0, 0, 1800, 1200);
    if (img2) {
      newContext.drawImage(img2, 0, 0);
    }
    let xw = 1800 / settings.cols;
    let xh = 1200 / settings.rows;
    let delay: number;
    for (let i = 0; i <= settings.cols; i++) {
      for (let j = 0; j <= settings.rows; j++) {
        delay = (j * i) / (settings.cols * settings.rows);
        newContext.clearRect(
          i * xw,
          j * xh,
          xw * clamp(state.pos - delay, 0, 1),
          xh * clamp(state.pos - delay, 0, 1)
        );
      }
    }
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const newContext = newCanvasRef.current?.getContext("2d");
    const context = canvas?.getContext("2d");
    if (context && newContext) {
      context.clearRect(0, 0, 1800, 1200);
      if (img) {
        context.drawImage(img, 0, 0);
      }
      renderTempCanvas(context, newContext);
      if (newCanvasRef.current) {
        context.drawImage(newCanvasRef.current, 0, 0);
      }
      window.requestAnimationFrame(draw);
    }
  }, [settings, state, img]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const newCanvas = newCanvasRef.current;
    if (canvas && newCanvas && imageLoaded && image2Loaded) {
      canvas.width = 320;
      canvas.height = 320;
      canvas.style.width = "160px";
      canvas.style.height = "160px";

      newCanvas.width = 320;
      newCanvas.height = 320;

      const context = canvas.getContext("2d");
      const newContext = newCanvas.getContext("2d");

      if (context && newContext) {
        const imgObj = new Image();
        imgObj.src = img1Url;
        imgObj.onload = () => {
          setImg(imgObj);
          setImageLoaded(true);
        };

        const img2Obj = new Image();
        img2Obj.src = img2Url;
        img2Obj.onload = () => {
          setImg2(img2Obj);
          setImage2Loaded(true);
        };

        draw();

        return () => {
          imgObj.src = "";
          img2Obj.src = "";
        };
      }
    }
  }, [imageLoaded, image2Loaded, settings, state, draw]);

  const toggleState = () => {
    const newState = { ...state };
    newState.pos = newState.pos === 2 ? 0 : 2;
    setState(newState);
    console.log(state)
  };

  return (
    <div className="container">
      <h4>Case 2</h4>
      <div className={style.box}>
        <canvas ref={canvasRef} id="canvas" />
        <canvas ref={newCanvasRef} />
      </div>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
};

export default Case2;
