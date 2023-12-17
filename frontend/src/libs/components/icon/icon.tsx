import { type IconName, iconNameToIcon } from "./common.js";

type Properties = {
  iconName: IconName;
  className?: string;
  ariaLabel?: string;
  ariaRole?: "img" | "none";
};

const Icon: React.FC<Properties> = ({
  iconName,
  className,
  ariaLabel = "",
  ariaRole = "none",
}) => {
  const SvgIcon = iconNameToIcon[iconName];

  return (
    <SvgIcon className={className} aria-label={ariaLabel} role={ariaRole} />
  );
};

export { Icon };
export { type IconName } from "./common.js";
