import { type ClassValue, clsx } from "clsx";

const getValidClassNames = (...classes: ClassValue[]): string => {
  return clsx(classes);
};

export { getValidClassNames };
