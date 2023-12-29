import {
  EventsNavigation,
  Icon,
  Layout,
  Link,
  RouterOutlet,
} from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";
import avatar from "~/assets/images/avatar.png";

import styles from "./styles.module.scss";

const MOCKED_EVENT = {
  id: 1,
  name: "Hackathon - Webdev and mobile applications!",
  date: "24.05",
  place: "Tokyo",
  membersCount: "2/10",
  relatedInterests: ["Programming", "Technologies"],
  isCompleted: true,
  creator: {
    id: 1,
    avatar,
    name: "Paul",
    lastName: "Star",
  },
};

const Event: React.FC = () => (
  <Layout title="My event">
    <EventsNavigation />
    <article className={styles.card}>
      <img
        src={MOCKED_EVENT.creator.avatar}
        alt={MOCKED_EVENT.creator.name}
        width="130"
        height="130"
        className={styles.avatar}
      />
      <div className={styles.event}>
        <div className={styles.eventInformation}>
          <div className={styles.details}>
            <span className={styles.eventCreator}>
              {MOCKED_EVENT.creator.name} {MOCKED_EVENT.creator.lastName}
            </span>
            <h3 className={styles.eventName}>{MOCKED_EVENT.name}</h3>
            <ul className={styles.eventDetails}>
              <li className={styles.eventDetail}>
                <Icon
                  iconName="calendarFilled"
                  className={styles.icon}
                  ariaLabel="The date of the event"
                  ariaRole="img"
                />
                <span className={styles.eventDetailText}>
                  {MOCKED_EVENT.date}
                </span>
              </li>
              <li className={styles.eventDetail}>
                <Icon
                  iconName="eventLocationFilled"
                  className={styles.icon}
                  ariaLabel="Venue of the event"
                  ariaRole="img"
                />
                <span className={styles.eventDetailText}>
                  {MOCKED_EVENT.place}
                </span>
              </li>
              <li className={styles.eventDetail}>
                <Icon
                  iconName="membersFilled"
                  className={styles.icon}
                  ariaLabel="Number of event participants"
                  ariaRole="img"
                />
                <span className={styles.eventDetailText}>
                  {MOCKED_EVENT.membersCount}
                </span>
              </li>
            </ul>
          </div>
          <section className={styles.relatedInterests}>
            <h4 className={styles.relatedInterestsTitle}>
              <Icon iconName="relatedInterestsFilled" className={styles.icon} />
              <span className={styles.relatedInterestsText}>
                Related Interests
              </span>
            </h4>
            <span className={styles.relatedInterestsList}>
              {MOCKED_EVENT.relatedInterests.join(", ")}
            </span>
          </section>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            <li>
              <Link
                to={AppRoute.EVENTS_$ID_DESCRIPTION}
                className={styles.listItemLink}
                activeClassName={styles.activeListItemLink}
              >
                Description
              </Link>
            </li>
            <li>
              <Link
                to={AppRoute.EVENTS_$ID_MEMBERS}
                className={styles.listItemLink}
                activeClassName={styles.activeListItemLink}
              >
                Members
              </Link>
            </li>
            <li>
              <Link
                to={AppRoute.EVENTS_$ID_FORUM}
                className={styles.listItemLink}
                activeClassName={styles.activeListItemLink}
              >
                Forum
              </Link>
            </li>
          </ul>
        </nav>
        <RouterOutlet />
      </div>
    </article>
  </Layout>
);

export { Event };
export {
  EventDescription,
  EventForum,
  EventMembers,
} from "./libs/components/components.js";
