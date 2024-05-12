import styles from "./index.module.scss";

export default function Button1() {
  return (
    <a
      className={styles.buttoLlight}
      href="#"
      target="_blank"
    >
      <div className={styles.light} />
      <div className={styles.content1}>
        Hover Me
      </div>
      <div className={styles.content2}>
        Start
      </div>
    </a>
  );
}
