import styles from "./page.module.scss";

export default function AudioWaveLoader() {
  return (
    <div className={styles["container"]}>
      <h1>Audio Wave Loader</h1>
      <div className={styles["loader"]}>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
