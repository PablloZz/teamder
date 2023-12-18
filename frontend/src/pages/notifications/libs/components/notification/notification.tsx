import { Button } from "@/components/components.js";
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
      <div className={styles.message}>
        <strong>
          {MOCKED_NOTIFICATION.sender.name}&nbsp;
          {MOCKED_NOTIFICATION.sender.lastName}
        </strong>
        <span>&nbsp;{MOCKED_NOTIFICATION.message}&nbsp;</span>
        <strong>{MOCKED_NOTIFICATION.event}</strong>!
      </div>
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
