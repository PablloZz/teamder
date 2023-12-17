import { IconButton } from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";
import { useLocation, useNavigate } from "@/hooks/hooks.js";

import { PREVIOUS_PAGE_INDEX } from "./libs/constants/constants.js";
import styles from "./styles.module.scss";

type Properties = {
  children: React.ReactNode;
  title: string;
};

const Layout: React.FC<Properties> = ({ children, title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = (): void => navigate(PREVIOUS_PAGE_INDEX);

  return (
    <main>
      <header className={styles.header}>
        {location.pathname === AppRoute.ROOT ? (
          <span className={styles.title}>Welcome, Paul!</span>
        ) : (
          <IconButton
            iconName="back"
            label="Back"
            onClick={handleGoBack}
            buttonClassName={styles.backButton}
          />
        )}
        <h2 className={styles.title}>{title}</h2>
      </header>
      {children}
    </main>
  );
};

export { Layout };
