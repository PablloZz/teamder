import { NavLink } from "react-router-dom";

import { type AppRoute } from "@/enums/enums.js";
import { getValidClassNames } from "@/helpers/helpers.js";
import { type ValueOf } from "@/types/types.js";

import styles from "./styles.module.scss";

type Properties = {
  to: ValueOf<typeof AppRoute>;
  children: React.ReactNode;
  className?: string;
};

const Link: React.FC<Properties> = ({ children, to, className }) => (
  <NavLink to={to} className={getValidClassNames(styles.link, className)}>
    {children}
  </NavLink>
);

export { Link };
