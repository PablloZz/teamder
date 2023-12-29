import { AppRoute } from "@/enums/enums.js";

import { Button, Icon, IconButton, Link } from "../components.js";
import styles from "./styles.module.scss";

const Sidebar: React.FC = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <Icon iconName="teamderLogo" className={styles.logo} />
      Teamder
    </h1>
    <nav>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list" className={styles.navigationList}>
        <li className={styles.listItem}>
          <Link
            to={AppRoute.ROOT}
            className={styles.listItemLink}
            activeClassName={styles.activeListItemLink}
          >
            <Icon iconName="home" className={styles.listItemIcon} />
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            to={AppRoute.MY_EVENTS}
            className={styles.listItemLink}
            activeClassName={styles.activeListItemLink}
          >
            <Icon iconName="teams" className={styles.listItemIcon} />
            My events
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            to={AppRoute.NOTIFICATIONS}
            className={styles.listItemLink}
            activeClassName={styles.activeListItemLink}
          >
            <Icon iconName="notifications" className={styles.listItemIcon} />
            Notifications
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            to={AppRoute.PROFILE_$ID}
            className={styles.listItemLink}
            activeClassName={styles.activeListItemLink}
          >
            <Icon iconName="profile" className={styles.listItemIcon} />
            Profile
          </Link>
        </li>
      </ul>
      <Button
        label="Create an event"
        onClick={(): void => {}}
        type="button"
        className={styles.createEventButton}
      />
    </nav>
    <IconButton
      iconName="signOut"
      label="Sign out"
      onClick={(): void => {}}
      buttonClassName={styles.signOutButton}
    />
  </header>
);

export { Sidebar };
