import { config } from "@/packages/config/config.js";
import { http } from "@/packages/http/http.js";
import { storage } from "@/packages/storage/storage.js";

import { UsersApi } from "./users-api.package.js";

const usersApi = new UsersApi({
  baseUrl: config.ENV.API.ORIGIN_URL,
  http,
  storage,
});

export { usersApi };
export {
  type UserGetAllResponseDto,
  type UserGetResponseDto,
  type UserSignUpRequestDto,
  type UserSignUpResponseDto,
} from "./libs/types/types.js";
export { userSignUpValidationSchema } from "./libs/validation-schemas/validation-schemas.js";
