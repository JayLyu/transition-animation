import styles from "./page.module.scss";

const WaveAnimationData = [
  "https://images.unsplash.com/photo-1713847243126-ff9ec9b40db9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjF8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1713647820002-4a31dbf1f719?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1690575539214-eb0ade6cdd4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1713810351163-3cb63c5228ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1713815713459-c4b9c6337b9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1713907908481-ad7a7b0d1085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1713709165253-1d80397cc8c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713971346394-6030222f7ca2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1713823800083-a26882b5add5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713878842843-947d3d770b87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682470021166-48f7f8fbe416?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713782522357-95a1db5a97e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713439242060-1bb7de4214ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D",
];

export default function WaveAnimation() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["items"]}>
        {WaveAnimationData?.map((item: string, index: number) => (
          <div
            key={ index }
            tabIndex={0}
            className={styles["item"]}
            style={{
              backgroundImage: `url(${item})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
