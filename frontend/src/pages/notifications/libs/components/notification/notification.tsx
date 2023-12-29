import { Button } from "@/components/components.js";
import { getValidClassNames } from "@/helpers/helpers.js";
import avatar from "~/assets/images/avatar.png";

import styles from "./styles.module.scss";

const MOCKED_NOTIFICATION = {
  sender: {
    avatar,
    name: "Sofia",
    lastName: "Oliva",
  },
  message: "wants to join your team",
  event: "Hackathon - Webdev and mobile applications",
};

const Notification: React.FC = () => (
  <article className={styles.notification}>
    <div className={styles.details}>
      <img
        src={MOCKED_NOTIFICATION.sender.avatar}
        alt={MOCKED_NOTIFICATION.sender.name}
        width="130"
        height="130"
        className={styles.avatar}
      />
      <h3>
        <span
          className={getValidClassNames(
            styles.highlightedText,
            styles.messageText,
          )}
        >
          {MOCKED_NOTIFICATION.sender.name}&nbsp;
          {MOCKED_NOTIFICATION.sender.lastName}&nbsp;
        </span>
        <span className={styles.messageText}>
          {MOCKED_NOTIFICATION.message}&nbsp;
        </span>
        <span
          className={getValidClassNames(
            styles.highlightedText,
            styles.messageText,
          )}
        >
          {MOCKED_NOTIFICATION.event}!
        </span>
      </h3>
    </div>
    <div className={styles.buttonsWrapper}>
      <Button
        type="button"
        label="Accept"
        onClick={(): void => {}}
        className={styles.acceptButton}
      />
      <Button
        type="button"
        label="Delete"
        onClick={(): void => {}}
        className={styles.deleteButton}
      />
    </div>
  </article>
);

export { Notification };
