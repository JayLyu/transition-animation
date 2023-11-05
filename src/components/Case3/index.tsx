import React, { useState } from "react";
import style from "./index.module.scss";

import img1Url from "../../imgs/img1.png";
import img2Url from "../../imgs/img2.png";
import img3Url from "../../imgs/img3.png";
import img4Url from "../../imgs/img4.png";

const Case3: React.FC = () => {
  // 用户上传了图片
  const [uploadImage, setUploadImage] = useState(false);
  const [animation, setAnimation] = useState(false);
  // 拿到后端返回的图片
  const [resultImg, getResultImg] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const toggle = () => {
    setAnimation(true);
    setUploadImage(true);
    setTimeout(() => {
      setShowSecondImage(true);
      setAnimation(false);
    }, 3000);
  };

  return (
    <div className="container">
      <h4>Case 3</h4>
      <div className={`${style.box} ${animation ? style.anima : ""}`}>
        {/* 初始图片 */}
        {!showSecondImage && (
          <img
            alt="defaultImage"
            className={style.imgStyle}
            src={uploadImage ? img2Url : img1Url}
          />
        )}
        {/* 被处理后的图片 */}
        {showSecondImage && (
          <>
            <img alt="hedImage" className={style.imgStyle} src={img3Url} />
            <img alt="productImage" className={style.imgStyle} src={img4Url} style={{
              width: 26,
              height: 'auto',
              top: 45,
              left: 67
            }} />
          </>
        )}
        {/* 动画播放时的元素 */}
        {animation && (<span className={style.scanTopBorder} />)}
        {animation && (<span className={style.scanBottomBorder} />)}
        
      </div>
      <div>
        <button disabled={animation || showSecondImage} onClick={toggle}>
          Upload
        </button>
        <button
          style={{ marginLeft: "1rem" }}
          disabled={!showSecondImage}
          onClick={() => {
            setAnimation(false);
            setShowSecondImage(false);
            setUploadImage(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Case3;
