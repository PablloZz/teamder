import { createAsyncThunk } from "@reduxjs/toolkit";

import { SliceName } from "@/enums/enums.js";
import { type AsyncThunkConfig } from "@/types/types.js";
import {
  type UserSignUpBasic,
  type UserSignUpResponseDto,
} from "#/users/users.js";

const signUp = createAsyncThunk<
  UserSignUpResponseDto,
  UserSignUpBasic,
  AsyncThunkConfig
>(`${SliceName.AUTH}/sign-up`, (signUpPayload, { extra }) => {
  const { authApi } = extra;

  return authApi.signUp(signUpPayload);
});

export { signUp };
