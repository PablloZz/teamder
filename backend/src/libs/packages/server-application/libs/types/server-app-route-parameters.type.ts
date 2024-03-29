import { type FastifyReply, type FastifyRequest } from "fastify";

import { type HttpMethod } from "@/packages/http/http.js";
import { type ValidationSchema } from "@/types/types.js";

type ServerAppRouteParameters = {
  path: string;
  method: HttpMethod;
  handler: (
    request: FastifyRequest,
    reply: FastifyReply,
  ) => Promise<void> | void;
  validation?: {
    body?: ValidationSchema;
  };
};

export { type ServerAppRouteParameters };
