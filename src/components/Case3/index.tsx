import React, { useEffect, useState } from "react";
import style from "./index.module.scss";

const img1Url =
  "https://gw.alicdn.com/bao/uploaded/i3/2206959856582/O1CN01047eSf1yUbnZR6b7o_!!0-item_pic.jpg";
const img2Url =
"https://gw.alicdn.com/bao/uploaded/i3/2206959856582/O1CN01047eSf1yUbnZR6b7o_!!0-item_pic.jpg";
const img3Url =
  "https://gw.alicdn.com/bao/uploaded///asearch.alicdn.com/bao/uploaded/O1CN013HQHLr1PPYkN0IqcJ_!!6000000001833-0-yinhe.jpg";

const Case3: React.FC = () => {
  const [upload, setUpload] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const toggle = () => {
    setTimeout(() => {
      setShowSecondImage(true);
    }, 3000);
  };

  return (
    <div className={style.container}>
      <h4>Case 3</h4>
      <div
        className={showSecondImage ? style.box : `${style.box} ${style.anima}`}
      >
        {!showSecondImage && (
          <img alt="" className={style.productImg} src={img1Url} />
        )}
        {showSecondImage && (
          <img alt="" className={style.productImg} src={img2Url} />
        )}
      </div>
      <div>
        <button onClick={toggle}>Upload</button>
        <button
          style={{ marginLeft: "1rem" }}
          disabled={!showSecondImage}
          onClick={() => setShowSecondImage(false)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Case3;
