import { type ButtonType } from "@/enums/enums.js";
import { getValidClassNames } from "@/helpers/helpers.js";
import { type ValueOf } from "@/types/types.js";

import styles from "./styles.module.scss";

type Properties = {
  label: string;
  type?: ValueOf<typeof ButtonType>;
  onClick:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
  className?: string;
};

const Button: React.FC<Properties> = ({
  type = "button",
  label,
  onClick,
  className,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={getValidClassNames(styles.button, className)}
  >
    {label}
  </button>
);

export { Button };
