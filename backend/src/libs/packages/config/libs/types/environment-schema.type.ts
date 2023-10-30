import { type AppEnvironment } from "@/enums/enums.js";
import { type ValueOf } from "@/types/types.js";

type EnvironmentSchema = {
  APP: {
    ENVIRONMENT: ValueOf<typeof AppEnvironment>;
    PORT: number;
  };
  DB: {
    CONNECTION_STRING: string;
    DIALECT: string;
    POOL_MIN: number;
    POOL_MAX: number;
  };
};

export { type EnvironmentSchema };
