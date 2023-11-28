import { RouterOutlet, Sidebar } from "@/components/components.js";

const App: React.FC = () => (
  <>
    <Sidebar />
    <RouterOutlet />
  </>
);

export { App };
