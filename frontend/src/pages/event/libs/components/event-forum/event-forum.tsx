import { Icon } from "@/components/components.js";
import { getValidClassNames } from "@/helpers/helpers.js";
import avatar from "~/assets/images/avatar.png";

import styles from "./styles.module.scss";

const MOCKED_MESSAGES = [
  {
    id: 2,
    user: { id: 2, name: "Sofia", avatar },
    message: "Let's start!",
  },
  {
    id: 1,
    user: { id: 1, name: "Paul", avatar },
    message: "Let's do that!",
  },
];

const EventForum: React.FC = () => (
  <div className={styles.forum}>
    <div className={styles.messages}>
      {MOCKED_MESSAGES.map((message) => (
        <div
          key={message.id}
          className={getValidClassNames(
            styles.messageDetails,
            message.user.id === 1 && styles.currentUserMessage,
          )}
        >
          <img
            src={message.user.avatar}
            alt={message.user.name}
            width="130"
            height="130"
            className={styles.avatar}
          />
          <div className={styles.messageWrapper}>
            <span className={styles.message}>{message.message}</span>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.newMessageWrapper}>
      <span className={styles.newMessage} contentEditable>
        New Message
      </span>
      <Icon iconName="send" className={styles.sendIcon} />
    </div>
  </div>
);

export { EventForum };
