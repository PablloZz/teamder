import { NavLink } from "react-router-dom";

import { type AppRoute } from "@/enums/enums.js";
import { type ValueOf } from "@/types/types.js";

type Properties = {
  to: ValueOf<typeof AppRoute>;
  children: React.ReactNode;
};

const Link: React.FC<Properties> = ({ children, to }) => (
  <NavLink to={to}>{children}</NavLink>
);

export { Link };
