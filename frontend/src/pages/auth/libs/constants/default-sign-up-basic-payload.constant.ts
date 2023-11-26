import { type UserSignUpBasic } from "#/users/users.js";

const DEFAULT_SIGN_UP_BASIC_PAYLOAD: UserSignUpBasic = {
  login: "",
  email: "",
  name: "",
  lastName: "",
  password: "",
  city: "",
  age: null,
};

export { DEFAULT_SIGN_UP_BASIC_PAYLOAD };
