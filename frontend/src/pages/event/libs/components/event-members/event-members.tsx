import { getValidClassNames } from "@/helpers/helpers.js";
import avatar from "~/assets/images/avatar.png";

import styles from "./styles.module.scss";

const MOCKED_MEMBERS = [
  { id: 1, name: "Paul", lastName: "Star", avatar },
  { id: 2, name: "Sofia", lastName: "Oliva", avatar },
];

const EventMembers: React.FC = () => (
  <ul className={styles.members}>
    {MOCKED_MEMBERS.map((member) => (
      <li
        key={member.id}
        className={getValidClassNames(
          styles.member,
          member.name === "Paul" && styles.currentUser,
        )}
      >
        <img
          src={member.avatar}
          alt={member.name}
          width="130"
          height="130"
          className={styles.avatar}
        />
        <div className={styles.initials}>
          {member.name} {member.lastName}
        </div>
      </li>
    ))}
  </ul>
);

export { EventMembers };
