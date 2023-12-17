import { getValidClassNames } from "@/helpers/helpers.js";

import { Icon } from "../components.js";
import { type IconName } from "../icon/icon.js";
import styles from "./styles.module.scss";

type Properties = {
  label?: string;
  iconClassName?: string;
  buttonClassName?: string;
  iconAriaLabel?: string;
  iconAriaRole?: "img";
  iconName: IconName;
  onClick:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
};

const IconButton: React.FC<Properties> = ({
  label = "",
  iconName,
  iconClassName,
  buttonClassName,
  onClick,
  iconAriaLabel,
  iconAriaRole,
}) => {
  return (
    <button
      type="button"
      className={getValidClassNames(styles.button, buttonClassName)}
      onClick={onClick}
    >
      <Icon
        iconName={iconName}
        className={iconClassName}
        ariaLabel={iconAriaLabel}
        ariaRole={iconAriaRole}
      />
      {label}
    </button>
  );
};

export { IconButton };
