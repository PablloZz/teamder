import { type ContentType } from "@/enums/enums.js";
import { type HttpOptions } from "@/packages/http/http.js";
import { type ValueOf } from "@/types/types.js";

type HttpApiOptions = Omit<HttpOptions, "headers" | "payload"> & {
  hasAuth: boolean;
  contentType: ValueOf<typeof ContentType>;
  payload?: HttpOptions["payload"];
};

export { type HttpApiOptions };
