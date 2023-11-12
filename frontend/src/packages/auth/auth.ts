import { config } from "@/packages/config/config.js";
import { http } from "@/packages/http/http.js";
import { storage } from "@/packages/storage/storage.js";

import { AuthApi } from "./auth-api.package.js";

const authApi = new AuthApi({
  baseUrl: config.ENV.API.ORIGIN_URL,
  http,
  storage,
});

export { authApi };
