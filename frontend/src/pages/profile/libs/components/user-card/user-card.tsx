import { Icon } from "@/components/components.js";
import avatar from "~/assets/images/avatar.png";

import styles from "./styles.module.scss";

const MOCKED_USER = {
  avatar,
  name: "Paul",
  lastName: "Star",
  nickname: "@pablo",
  description: "Description",
  city: "Lviv - Ukraine",
  age: 20,
  likes: 42,
};

const UserCard: React.FC = () => (
  <section className={styles.userCard}>
    <div className={styles.info}>
      <img
        src={MOCKED_USER.avatar}
        alt="Paul"
        width="130"
        height="130"
        className={styles.avatar}
      />
      <div>
        <h3 className={styles.initials}>
          {MOCKED_USER.name} {MOCKED_USER.lastName}
        </h3>
        <span className={styles.nickname}>{MOCKED_USER.nickname}</span>
      </div>
    </div>
    <p className={styles.description}>{MOCKED_USER.description}</p>
    <ul className={styles.details}>
      <li className={styles.detail}>
        <Icon
          iconName="location"
          ariaLabel="Place of residence"
          ariaRole="img"
          className={styles.detailIcon}
        />
        <span className={styles.detailTitle}>{MOCKED_USER.city}</span>
      </li>
      <li className={styles.detail}>
        <Icon
          iconName="cake"
          ariaLabel="Age"
          ariaRole="img"
          className={styles.detailIcon}
        />
        <span className={styles.detailTitle}>{MOCKED_USER.age} y.o.</span>
      </li>
      <li className={styles.detail}>
        <Icon
          iconName="like"
          ariaLabel="Like the profile"
          ariaRole="img"
          className={styles.detailIcon}
        />
        <span className={styles.detailTitle}>{MOCKED_USER.likes}</span>
      </li>
    </ul>
  </section>
);

export { UserCard };
