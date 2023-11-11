import { joiResolver } from "@hookform/resolvers/joi";
import {
  type Control,
  type DefaultValues,
  type FieldErrors,
  type FieldValues,
  useForm,
  type UseFormHandleSubmit,
  type ValidationMode,
} from "react-hook-form";

import { type ValidationSchema } from "@/types/types.js";

type Parameters<T extends FieldValues = FieldValues> = {
  defaultValues: DefaultValues<T>;
  validationSchema?: ValidationSchema;
  mode?: keyof ValidationMode;
};

type ReturnValue<T extends FieldValues = FieldValues> = {
  control: Control<T, null>;
  errors: FieldErrors<T>;
  handleSubmit: UseFormHandleSubmit<T>;
};

const useAppForm = <T extends FieldValues = FieldValues>({
  defaultValues,
  validationSchema,
  mode,
}: Parameters<T>): ReturnValue<T> => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    defaultValues,
    mode,
    resolver: validationSchema ? joiResolver(validationSchema) : undefined,
  });

  return { control, handleSubmit, errors };
};

export { useAppForm };
