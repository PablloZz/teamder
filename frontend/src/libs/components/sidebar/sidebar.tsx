import { AppRoute } from "@/enums/enums.js";

import { Button, Icon, IconButton, Link } from "../components.js";
import styles from "./styles.module.scss";

const Sidebar: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.sidebarHeader}>
      <Icon iconName="teamderLogo" className={styles.logo} />
      <h1 className={styles.title}>Teamder</h1>
    </div>
    <nav>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list" className={styles.list}>
        <li className={styles.listItem}>
          <Link to={AppRoute.ROOT} className={styles.listItemTitle}>
            <Icon iconName="home" className={styles.listItemIcon} />
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to={AppRoute.TEAMS} className={styles.listItemTitle}>
            <Icon iconName="teams" className={styles.listItemIcon} />
            Teams
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to={AppRoute.NOTIFICATIONS} className={styles.listItemTitle}>
            <Icon iconName="notifications" className={styles.listItemIcon} />
            Notifications
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to={AppRoute.PROFILE_$ID} className={styles.listItemTitle}>
            <Icon iconName="profile" className={styles.listItemIcon} />
            Profile
          </Link>
        </li>
      </ul>
      <Button
        label="Create a team"
        onClick={(): void => {}}
        type="button"
        className={styles.createTeamButton}
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
