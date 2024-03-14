import { Avatar } from "../avatar/avatar";
import styles from "./header.module.scss";
import avatar from "../../images/avatar.jpeg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>logo</div>
      <div>
        <Avatar src={avatar} alt={"avatar"} isBordered={true} />
      </div>
    </header>
  );
};
