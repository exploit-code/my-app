import Link from "next/link";
import styles from "./my-link.module.scss";
import cn from "classnames";

interface IMyLink {
  text: string;
  link: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  underline?: boolean;
  size: "s" | "m" | "l";
}

export const MyLink = ({ text, link, color = "primary", size, underline = false }: IMyLink) => {
  return (
    <Link
      href={link}
      className={cn(
        styles.mylink,
        styles[`mylink_color_${color}`],
        styles[`mylink_size_${size}`],
        underline && styles.mylink_underline
      )}
    >
      {text}
    </Link>
  );
};
