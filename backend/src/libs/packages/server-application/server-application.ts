import { config } from "@/packages/config/config.js";
import { database } from "@/packages/database/database.js";
import { logger } from "@/packages/logger/logger.js";
import { authController } from "#/auth/auth.js";
import { userController } from "#/users/users.js";

import { ServerApp } from "./server-app.js";
import { ServerAppApi } from "./server-app-api.js";

const apiV1 = new ServerAppApi(
  "v1",
  config,
  ...authController.routes,
  ...userController.routes,
);

const serverApp = new ServerApp({ config, logger, database, apis: apiV1 });

export { serverApp };
export { type ServerAppRouteParameters } from "./libs/types/types.js";
