import { Icon, Link } from "@/components/components.js";
import { getValidClassNames } from "@/helpers/helpers.js";
import avatar from "~/assets/images/avatar.png";
import { AppRoute } from "~/libs/enums/enums.js";

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

const EventOverviewCard: React.FC = () => (
  <article
    className={getValidClassNames(
      styles.eventCard,
      MOCKED_EVENT.isCompleted && styles.completedEvent,
    )}
  >
    <img
      src={MOCKED_EVENT.creator.avatar}
      alt={MOCKED_EVENT.creator.name}
      width="130"
      height="130"
      className={styles.avatar}
    />
    <div className={styles.eventInformation}>
      <div className={styles.details}>
        <span className={styles.eventCreator}>
          {MOCKED_EVENT.creator.name} {MOCKED_EVENT.creator.lastName}
        </span>
        <h3 className={styles.eventName}>{MOCKED_EVENT.name}</h3>
        <ul className={styles.eventDetails}>
          <li className={styles.eventDetail}>
            <Icon
              iconName="calendar"
              className={styles.icon}
              ariaLabel="The date of the event"
              ariaRole="img"
            />
            <span className={styles.eventDetailText}>{MOCKED_EVENT.date}</span>
          </li>
          <li className={styles.eventDetail}>
            <Icon
              iconName="eventLocation"
              className={styles.icon}
              ariaLabel="Venue of the event"
              ariaRole="img"
            />
            <span className={styles.eventDetailText}>{MOCKED_EVENT.place}</span>
          </li>
          <li className={styles.eventDetail}>
            <Icon
              iconName="members"
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
      <div className={styles.footer}>
        <section className={styles.relatedInterests}>
          <h4 className={styles.relatedInterestsTitle}>
            <Icon iconName="relatedInterests" className={styles.icon} />
            <span className={styles.relatedInterestsText}>
              Related Interests
            </span>
          </h4>
          <span className={styles.relatedInterestsList}>
            {MOCKED_EVENT.relatedInterests.join(", ")}
          </span>
        </section>
        <Link to={AppRoute.EVENTS_$ID} className={styles.seeMoreLink}>
          See More
        </Link>
      </div>
    </div>
  </article>
);

export { EventOverviewCard };
