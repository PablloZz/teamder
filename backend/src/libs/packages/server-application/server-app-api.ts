import swaggerJsdoc from "swagger-jsdoc";

import { AppEnvironment } from "@/enums/enums.js";
import { type IConfig } from "@/packages/config/config.js";

import { type IServerAppApi } from "./libs/interfaces/interfaces.js";
import { type ServerAppRouteParameters } from "./libs/types/types.js";

class ServerAppApi implements IServerAppApi {
  public version: string;

  public routes: ServerAppRouteParameters[];

  private config: IConfig;

  public constructor(
    version: string,
    config: IConfig,
    ...routesParameters: ServerAppRouteParameters[]
  ) {
    this.version = version;
    this.config = config;
    this.routes = routesParameters.map((routeParameters) => ({
      ...routeParameters,
      path: `/api/${this.version}${routeParameters.path}`,
    }));
  }

  public generateDoc(): ReturnType<typeof swaggerJsdoc> {
    const isProduction =
      this.config.ENV.APP.ENVIRONMENT === AppEnvironment.PRODUCTION;

    const controllerExtension = isProduction ? ".js" : ".ts";

    return swaggerJsdoc({
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Hello World",
          version: `${this.version}.0.0`,
        },
      },
      apis: [`src/packages/**/*.controller.${controllerExtension}`],
    });
  }
}

export { ServerAppApi };
