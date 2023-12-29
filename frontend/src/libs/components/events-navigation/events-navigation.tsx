import { Link } from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";
import { useLocation } from "@/hooks/hooks.js";

import styles from "./styles.module.scss";

const EventsNavigation: React.FC = () => {
  const location = useLocation();
  const isMyEventsPage = location.pathname.includes(AppRoute.MY_EVENTS);

  return (
    <nav className={styles.navigation}>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list" className={styles.navigationList}>
        <li>
          <Link
            to={
              isMyEventsPage ? AppRoute.MY_EVENTS_CURRENT : AppRoute.EVENTS_CURRENT
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
              isMyEventsPage
                ? AppRoute.MY_EVENTS_COMPLETED
                : AppRoute.EVENTS_COMPLETED
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

export { EventsNavigation };
