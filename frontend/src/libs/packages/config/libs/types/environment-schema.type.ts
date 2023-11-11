import { type AppEnvironment } from "@/enums/enums.js";
import { type ValueOf } from "@/types/types.js";

type EnvironmentSchema = {
  APP: {
    ENVIRONMENT: ValueOf<typeof AppEnvironment>;
  };
  API: {
    ORIGIN_URL: string;
  };
};

export { type EnvironmentSchema };
