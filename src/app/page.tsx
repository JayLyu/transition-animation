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
    </div>
  );
}
