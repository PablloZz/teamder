import { type HttpCode } from "@/packages/http/http.js";
import { type ValueOf } from "@/types/types.js";

type ApiHandlerResponse = {
  status: ValueOf<typeof HttpCode>;
  payload: unknown;
};

export { type ApiHandlerResponse };
