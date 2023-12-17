import { type FieldValues } from "react-hook-form";

import { getValidClassNames } from "@/helpers/helpers.js";
import { useFormController } from "@/hooks/hooks.js";

import {
  type CheckboxStyle,
  type InputProperties,
} from "./libs/types/types.js";
import styles from "./styles.module.scss";

type Properties<T extends FieldValues> = Omit<
  InputProperties<T>,
  "type" | "rows"
> & {
  checkboxStyle: CheckboxStyle;
  showCheckbox?: boolean;
};

const Checkbox = <T extends FieldValues>({
  control,
  errors,
  label,
  name,
  className,
  labelClassName,
  showLabel,
  checkboxStyle,
  showCheckbox,
}: Properties<T>): JSX.Element => {
  const { field } = useFormController<T>({ name, control });

  const error = errors[name]?.message;
  const hasError = Boolean(error);

  return (
    <label>
      <div
        className={getValidClassNames(
          styles.wrapper,
          !showCheckbox && styles.checkboxHidden,
        )}
      >
        <input
          {...field}
          type="checkbox"
          checked={field.value}
          className={getValidClassNames(
            styles.checkbox,
            styles[checkboxStyle],
            className,
          )}
        />
        <span
          className={
            showLabel
              ? getValidClassNames(styles.label, labelClassName)
              : "visually-hidden"
          }
        >
          {label}
        </span>
      </div>
      {hasError && <span>{error as string}</span>}
    </label>
  );
};

export { Checkbox };
