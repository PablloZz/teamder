import { Layout, Link, RouterOutlet } from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";

import { UserCard } from "./libs/components/components.js";
import styles from "./styles.module.scss";

const Profile: React.FC = () => {
  return (
    <Layout title="My profile">
      <div className={styles.wrapper}>
        <UserCard />
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            <li>
              <Link
                to={AppRoute.PROFILE_$ID_INTERESTS}
                className={styles.listItemLink}
                activeClassName={styles.activeListItemLink}
              >
                Interests
              </Link>
            </li>
            <li>
              <Link
                to={AppRoute.PROFILE_$ID_SOCIAL_MEDIA}
                className={styles.listItemLink}
                activeClassName={styles.activeListItemLink}
              >
                Social Media
              </Link>
            </li>
            <li>
              <Link
                to={AppRoute.PROFILE_$ID_EDIT_PROFILE}
                className={styles.listItemLink}
                activeClassName={styles.activeListItemLink}
              >
                Edit Profile
              </Link>
            </li>
          </ul>
        </nav>
        <RouterOutlet />
      </div>
    </Layout>
  );
};

export { Profile };
export {
  EditProfile,
  Interests,
  SocialMedia,
} from "./libs/components/components.js";
