"use client";

import GodRays from "../GodRays/page";
import styles from "./page.module.scss";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const scope = { styles, GodRays };
const code = `<GodRays currentTheme="dark" />`;

export default function LiveCode() {
  return (
    <LiveProvider code={code} scope={scope}>
      <div className={styles["live"]}>
        <div className={styles["editor"]}>
          <LiveEditor />
        </div>
        <div className={styles["preview"]}>
          <LivePreview />
        </div>
        {/* <LiveError /> */}
      </div>
    </LiveProvider>
  );
}
