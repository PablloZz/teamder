import { type Knex } from "knex";

import { type AppEnvironment } from "@/enums/enums.js";
import { type ValueOf } from "@/types/types.js";

interface IDatabase {
  connect: () => void;
  environmentsConfig: Record<ValueOf<typeof AppEnvironment>, Knex.Config>;
}

export { type IDatabase };
