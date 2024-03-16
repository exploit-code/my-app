import { Avatar } from "../avatar/avatar";
import styles from "./header.module.scss";
import avatar from "../../images/avatar.jpeg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>logo</div>
      <div>
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
