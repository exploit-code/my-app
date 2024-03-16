import cn from "classnames";
import styles from "./avatar.module.scss";
import Image, { StaticImageData } from "next/image";

interface IAvatarProps {
  src: StaticImageData;
  alt: string;
  border: boolean;
  status: boolean;
  radius: "s" | "m" | "l";
  size: "s" | "m" | "l";
  color: "primary" | "secondary" | "success" | "warning" | "danger";
}

export const Avatar = ({
  src,
  alt,
  border = false,
  status = false,
  radius,
  size,
  color,
}: IAvatarProps) => {
  return (
    <div
      className={cn(
        styles.avatar,
        styles[`avatar_radius_${radius}`],
        styles[`avatar_size_${size}`],
        border && styles.avatar_border,
        color && styles[`avatar_color_${color}`]
      )}
    >
      <Image
        className={cn(styles.avatar__image, styles[`avatar__image_radius_${radius}`])}
        src={src}
        alt={alt}
        priority={true}
        placeholder="blur"
      />
      {status && <span className={styles.avatar_status}></span>}
    </div>
  );
};
