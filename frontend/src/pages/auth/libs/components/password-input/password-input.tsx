import { type FieldValues } from "react-hook-form";

import { IconButton, Input } from "@/components/components.js";
import { type InputProperties } from "@/components/input/input.js";
import { useState } from "@/hooks/hooks.js";

import styles from "./styles.module.scss";

type Properties<T extends FieldValues> = InputProperties<T>;

const PasswordInput = <T extends FieldValues>(
  properties: Properties<T>,
): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleShowPassword = (): void => {
    setIsPasswordVisible(
      (previousPasswordVisibility) => !previousPasswordVisibility,
    );
  };

  return (
    <div className={styles.wrapper}>
      <IconButton
        iconName={isPasswordVisible ? "hide" : "show"}
        iconClassName={styles.icon}
        onClick={handleShowPassword}
      />
      <Input
        {...properties}
        type={isPasswordVisible ? "text" : "password"}
        className={styles.passwordInput}
      />
    </div>
  );
};

export { PasswordInput };
