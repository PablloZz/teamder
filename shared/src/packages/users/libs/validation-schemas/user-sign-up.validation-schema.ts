import joi from "joi";

import { UserValidationMessage } from "../enums/enums.js";
import { type UserSignUpBasic } from "../types/types.js";

const userSignUp = joi.object<UserSignUpBasic, true>({
  login: joi.string().trim().required(),
  name: joi.string().trim().required(),
  lastName: joi.string().trim().required(),
  email: joi
    .string()
    .trim()
    .email({
      tlds: {
        allow: false,
      },
    })
    .required()
    .messages({
      "string.email": UserValidationMessage.EMAIL_WRONG,
      "string.empty": UserValidationMessage.EMAIL_REQUIRED,
    }),
  password: joi.string().trim().required(),
  city: joi.string().trim().allow(null),
  age: joi.number().positive().allow(null),
});

export { userSignUp };
