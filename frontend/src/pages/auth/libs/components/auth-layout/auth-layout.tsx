import { Icon } from "@/components/components.js";
import authBackground from "~/assets/images/auth-background.png?url";

import styles from "./styles.module.scss";

type Properties = { children: React.ReactNode };

const AuthLayout: React.FC<Properties> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={authBackground}
        className={styles.background}
        alt="background"
        width="960"
        height="1080"
      />
      <div className={styles.formWrapper}>
        <header className={styles.header}>
          <Icon iconName="teamderLogo" className={styles.logo} />
          <div className={styles.descriptionWrapper}>
            <h1 className={styles.title}>Teamder</h1>
            <div className={styles.description}>Find your dreamteam</div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
};

export { AuthLayout };
