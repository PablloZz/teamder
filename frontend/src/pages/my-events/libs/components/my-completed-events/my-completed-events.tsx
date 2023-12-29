import { EventOverviewCard } from "../components.js";
import styles from "./styles.module.scss";

const MyCompletedEvents: React.FC = () => (
  <div className={styles.wrapper}>
    <EventOverviewCard />
    <EventOverviewCard />
    <EventOverviewCard />
    <EventOverviewCard />
    <EventOverviewCard />
    <EventOverviewCard />
    <EventOverviewCard />
    <EventOverviewCard />
  </div>
);

export { MyCompletedEvents };
