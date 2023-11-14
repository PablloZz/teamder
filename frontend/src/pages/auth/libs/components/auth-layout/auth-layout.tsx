import authBackground from "~/assets/images/auth-background.png";

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
      <div className={styles.formWrapper}>{children}</div>
    </div>
  );
};

export { AuthLayout };
