import styles from "./page.module.scss";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.content}>
      {/* <Link href={"/Case1"}>
        <div className={styles.card}>Case 1</div>
      </Link> */}
      {/* <Link href={"/Case2"}>
        <div className={styles.card}>Case 2</div>
      </Link> */}
      {/* <Link href={"/Case3"}>
        <div className={styles.card}>Case 3</div>
      </Link> */}
      <Link href={"/GalleryEffect"}>
        <div className={styles.card}>Gallery Effect</div>
      </Link>
      <Link href={"/AudioWaveLoader"}>
        <div className={styles.card}>Audio Wave Loader</div>
      </Link>
      <Link href={"/GodRays"}>
        <div className={styles.card}>God Rays</div>
      </Link>
      <Link href={"/WaveAnimation"}>
        <div className={styles.card}>3D Wave Animation</div>
      </Link>
      <Link href={"/LiveCode"}>
        <div className={styles.card}>Live Code</div>
      </Link>
      <Link href={"/mdx-page"}>
        <div className={styles.card}>MDX</div>
      </Link>
      <Link href={"/r3f"}>
        <div className={styles.card}>React ThreeJS</div>
      </Link>
      <Link href={"/Buttons"}>
        <div className={styles.card}>Buttons</div>
      </Link>
    </div>
  );
}
