import cn from "classnames";
import styles from "./avatar.module.scss";
import Image, { StaticImageData } from "next/image";

interface IAvatarProps {
  src: StaticImageData;
  alt: string;
  isBordered: boolean;
}

export const Avatar = ({ src, alt, isBordered }: IAvatarProps) => {
  return (
    <div className={cn(styles.avatar, isBordered && styles.avatar_border)}>
      <Image
        className={styles.avatar__image}
        src={src}
        alt={alt}
        priority={true}
        placeholder="blur"
      />
    </div>
  );
};
