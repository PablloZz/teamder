import { type ValueOf } from "@/types/types.js";

import { SignUpProgressStep } from "../../enums/enums.js";
import styles from "./styles.module.scss";

type Properties = {
  step: ValueOf<typeof SignUpProgressStep>;
};

const SignUpProgress: React.FC<Properties> = ({ step }) => (
  <div className={styles.progressWrapper}>
    <span className={step >= SignUpProgressStep.FIRST ? styles.filled : ""}>
      1
    </span>
    <span className={step >= SignUpProgressStep.SECOND ? styles.filled : ""}>
      2
    </span>
    <span className={step >= SignUpProgressStep.THIRD ? styles.filled : ""}>
      3
    </span>
  </div>
);

export { SignUpProgress };
