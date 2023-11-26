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
  type UserSignInRequestDto,
  type UserSignUpAdditionalInfo,
  type UserSignUpBasic,
  type UserSignUpInterests,
  type UserSignUpResponseDto,
} from "./libs/types/types.js";
export {
  userSignInValidationSchema,
  userSignUpValidationSchema,
} from "./libs/validation-schemas/validation-schemas.js";
