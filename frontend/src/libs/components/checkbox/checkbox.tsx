import {
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { getValidClassNames } from "@/helpers/helpers.js";
import { useFormController } from "@/hooks/hooks.js";

import styles from "./styles.module.scss";

type Properties<T extends FieldValues> = {
  control: Control<T, null>;
  errors: FieldErrors<T>;
  label: string;
  name: FieldPath<T>;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  showLabel?: boolean;
};

const Checkbox = <T extends FieldValues>({
  control,
  errors,
  label,
  name,
  className,
  labelClassName,
  wrapperClassName,
  showLabel,
}: Properties<T>): JSX.Element => {
  const { field } = useFormController<T>({ name, control });

  const error = errors[name]?.message;
  const hasError = Boolean(error);

  return (
    <label>
      <div className={getValidClassNames(styles.wrapper, wrapperClassName)}>
        <input
          {...field}
          type="checkbox"
          checked={field.value}
          className={getValidClassNames(styles.checkbox, className)}
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
