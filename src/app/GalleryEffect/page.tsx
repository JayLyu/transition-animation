import React from "react";
import styles from "./page.module.scss";


const GalleryEffect = () => {
  const imgs = [
    "https://plus.unsplash.com/premium_photo-1694161845354-f1e829687c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1680831748238-1fe52ad0e3af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1692897456940-982f81bfa0c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1712833027661-b2a82a5d7a96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1712251351536-7bda2a48e929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className={styles.container}>
      <h2>Gallery Effect</h2>

      <div className={styles.gallery}>
        {imgs.map((item, index) => {
          return (
            <div key={index} className={styles.galleryPanel}>
              <picture>
                <img src={item} alt="image" />
              </picture>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryEffect;
