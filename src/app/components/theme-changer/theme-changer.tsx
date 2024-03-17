"use client";

import styles from "./theme-changer.module.scss";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "@/redux/store";
import { themeToggled } from "@/redux/slices/theme-slice";
import { useEffect } from "react";

export const ThemeChanger = () => {
  const theme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [dispatch, theme]);

  return (
    <button className={styles.themechanger} onClick={() => dispatch(themeToggled())}>
      {theme === "dark" ? (
        <IoSunny className={styles.themechanger__icon} />
      ) : (
        <IoMoon className={styles.themechanger__icon} />
      )}
    </button>
  );
};
