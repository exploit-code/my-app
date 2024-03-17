"use client";

import { useState } from "react";
import styles from "./theme-changer.module.scss";
import { IoMoon, IoSunny } from "react-icons/io5";

export const ThemeChanger = () => {
  const [theme, setTheme] = useState<boolean>(false);

  const themeToggler = () => setTheme(!theme);

  return (
    <button className={styles.themechanger} onClick={themeToggler}>
      {theme ? (
        <IoSunny className={styles.themechanger__icon} />
      ) : (
        <IoMoon className={styles.themechanger__icon} />
      )}
    </button>
  );
};
