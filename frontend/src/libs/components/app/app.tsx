import { RouterOutlet } from "@/components/components.js";

const App: React.FC = () => (
  <>
    <h1>Home</h1>
    <div>
      <RouterOutlet />
    </div>
  </>
);

export { App };
