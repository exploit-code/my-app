import { Avatar } from "../avatar/avatar";
import styles from "./header.module.scss";
import avatar from "../../images/avatar.jpeg";
import { ThemeChanger } from "../theme-changer/theme-changer";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__box}>logo</div>
      <div className={styles.header__box}>
        <ThemeChanger />
        <Avatar
          src={avatar}
          alt={"avatar"}
          border={true}
          status={true}
          radius={"m"}
          size={"m"}
          color={"secondary"}
        />
      </div>
    </header>
  );
};
