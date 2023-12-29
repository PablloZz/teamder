import styles from "./styles.module.scss";

const MOCKED_DESCRIPTION =
  "Calling all coders! Join our Webdev & Mobile App Hackathon and build the next big thing in just 48 hours!";

const EventDescription: React.FC = () => (
  <div className={styles.description}>
    <p className={styles.descriptionText}>{MOCKED_DESCRIPTION}</p>
  </div>
);

export { EventDescription };
