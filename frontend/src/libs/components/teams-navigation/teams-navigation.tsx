import { Link } from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";
import { useLocation } from "@/hooks/hooks.js";

import styles from "./styles.module.scss";

const TeamsNavigation: React.FC = () => {
  const location = useLocation();
  const isMyTeamsPage = location.pathname.includes(AppRoute.MY_TEAMS);

  return (
    <nav className={styles.navigation}>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list" className={styles.navigationList}>
        <li>
          <Link
            to={
              isMyTeamsPage ? AppRoute.MY_TEAMS_CURRENT : AppRoute.TEAMS_CURRENT
            }
            className={styles.listItemLink}
            activeClassName={styles.activeListItemLink}
          >
            Current
          </Link>
        </li>
        <li>
          <Link
            to={
              isMyTeamsPage
                ? AppRoute.MY_TEAMS_COMPLETED
                : AppRoute.TEAMS_COMPLETED
            }
            className={styles.listItemLink}
            activeClassName={styles.activeListItemLink}
          >
            Completed
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { TeamsNavigation };
