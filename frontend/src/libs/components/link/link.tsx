import { NavLink } from "react-router-dom";

import { type AppRoute } from "@/enums/enums.js";
import { getValidClassNames } from "@/helpers/helpers.js";
import { useCallback } from "@/hooks/hooks.js";
import { type ValueOf } from "@/types/types.js";

import styles from "./styles.module.scss";

type Properties = {
  to: ValueOf<typeof AppRoute>;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
};

const Link: React.FC<Properties> = ({
  children,
  to,
  className,
  activeClassName,
}) => {
  const handleActiveLinkClassNames = useCallback(
    ({ isActive }: { isActive: boolean }) => {
      return getValidClassNames(
        styles.link,
        className,
        isActive && activeClassName,
      );
    },
    [className, activeClassName],
  );

  return (
    <NavLink to={to} className={handleActiveLinkClassNames}>
      {children}
    </NavLink>
  );
};

export { Link };
