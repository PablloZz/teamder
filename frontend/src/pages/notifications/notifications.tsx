import { Layout } from "@/components/components.js";

import { Notification } from "./libs/components/components.js";
import styles from "./styles.module.scss";

const Notifications: React.FC = () => (
  <Layout title="Notifications">
    <ul className={styles.notificationList}>
      <li>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </li>
    </ul>
  </Layout>
);

export { Notifications };
