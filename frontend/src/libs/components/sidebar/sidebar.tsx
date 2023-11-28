import { AppRoute } from "@/enums/enums.js";

import { Button, Icon, IconButton, Link } from "../components.js";
import styles from "./styles.module.scss";

const Sidebar: React.FC = () => (
  <header>
    <div className={styles.sidebarHeader}>
      <Icon iconName="teamderLogo" className={styles.logo} />
      <h1 className={styles.title}>Teamder</h1>
    </div>
    <nav>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list">
        <li>
          <Icon iconName="home" className={styles.listItemIcon} />
          <Link to={AppRoute.ROOT} className={styles.listItemTitle}>
            Home
          </Link>
        </li>
        <li>
          <Icon iconName="teams" className={styles.listItemIcon} />
          <Link to={AppRoute.TEAMS} className={styles.listItemTitle}>
            Teams
          </Link>
        </li>
        <li>
          <Icon iconName="notifications" className={styles.listItemIcon} />
          <Link to={AppRoute.NOTIFICATIONS} className={styles.listItemTitle}>
            Notifications
          </Link>
        </li>
        <li>
          <Icon iconName="profile" className={styles.listItemIcon} />
          <Link to={AppRoute.PROFILE} className={styles.listItemTitle}>
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
