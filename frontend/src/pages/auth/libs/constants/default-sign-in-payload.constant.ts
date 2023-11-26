import { type UserSignInRequestDto } from "#/users/users.js";

const DEFAULT_SIGN_IN_PAYLOAD: UserSignInRequestDto = {
  email: "",
  password: "",
  rememberMe: false,
};

export { DEFAULT_SIGN_IN_PAYLOAD };
