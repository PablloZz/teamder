import {
  EventsNavigation,
  Layout,
  RouterOutlet,
} from "@/components/components.js";

const MyEvents: React.FC = () => (
  <Layout title="My events">
    <EventsNavigation />
    <RouterOutlet />
  </Layout>
);

export { MyEvents };
export {
  MyCompletedEvents,
  MyCurrentEvents,
} from "./libs/components/components.js";
