"use client";

import { useState } from "react";
import styles from "./page.module.scss";

interface IGodRays {
  currentTheme?: "light" | "dark";
}

export default function GodRays({ currentTheme = "dark" }: IGodRays) {
  const [theme, toggleTheme] = useState<"light" | "dark">(currentTheme);
  return (
    <div
      className={
        theme === "dark" ? styles["app"] + " " + styles["dark"] : styles["app"]
      }
    >
      <div className={styles["container"] + " " + styles["transition-bg"]}>
        <div className={styles["bg-wrapper"]}>
          <div className={styles["jumbo"]} />
        </div>
        <h1>
          God Rays
          <span>
            <span>UI</span>
          </span>
        </h1>
        <button
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
