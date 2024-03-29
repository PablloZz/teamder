import { type ILogger } from "@/packages/logger/logger.js";
import { type ServerAppRouteParameters } from "@/packages/server-application/server-application.js";

import { type IController } from "./libs/interfaces/interfaces.js";
import {
  type ApiHandler,
  type ApiHandlerOptions,
  type ControllerRouteParameters,
} from "./libs/types/types.js";

class Controller implements IController {
  private logger: ILogger;

  private apiPath: string;

  public routes: ServerAppRouteParameters[];

  public constructor(logger: ILogger, apiPath: string) {
    this.logger = logger;
    this.apiPath = apiPath;
    this.routes = [];
  }

  public addRoute(options: ControllerRouteParameters): void {
    const { handler, path } = options;
    const fullPath = this.apiPath + path;

    this.routes.push({
      ...options,
      path: fullPath,
      handler: (request, reply) => this.mapHandler(handler, request, reply),
    });
  }

  private async mapHandler(
    handler: ApiHandler,
    request: Parameters<ServerAppRouteParameters["handler"]>[0],
    reply: Parameters<ServerAppRouteParameters["handler"]>[1],
  ): Promise<void> {
    this.logger.info(`${request.method.toUpperCase()} on ${request.url}`);

    const handlerOptions = this.mapRequest(request);
    const { status, payload } = await handler(handlerOptions);

    return await reply.status(status).send(payload);
  }

  private mapRequest(
    request: Parameters<ServerAppRouteParameters["handler"]>[0],
  ): ApiHandlerOptions {
    const { body, query, params } = request;

    return { body, query, params };
  }
}

export { Controller };
