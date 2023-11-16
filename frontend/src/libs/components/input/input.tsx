import {
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { type InputType } from "@/enums/enums.js";
import { getValidClassNames } from "@/helpers/helpers.js";
import { useFormController } from "@/hooks/hooks.js";
import { type ValueOf } from "@/types/types.js";

import styles from "./styles.module.scss";

type Properties<T extends FieldValues> = {
  control: Control<T, null>;
  errors: FieldErrors<T>;
  label: string;
  name: FieldPath<T>;
  placeholder?: string;
  type?: ValueOf<typeof InputType>;
  className?: string;
  labelClassName?: string;
  showLabel?: boolean;
};

const Input = <T extends FieldValues>({
  control,
  errors,
  label,
  name,
  placeholder = "",
  type = "text",
  className,
  labelClassName,
  showLabel = false,
}: Properties<T>): JSX.Element => {
  const { field } = useFormController<T>({ name, control });

  const error = errors[name]?.message;
  const hasError = Boolean(error);

  return (
    <label>
      <span className={showLabel ? labelClassName : "visually-hidden"}>
        {label}
      </span>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={getValidClassNames(styles.input, className)}
      />
      {hasError && <span>{error as string}</span>}
    </label>
  );
};

export { Input };
