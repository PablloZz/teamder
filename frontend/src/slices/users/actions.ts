import { createAsyncThunk } from "@reduxjs/toolkit";

import { SliceName } from "@/enums/enums.js";
import { type AsyncThunkConfig } from "@/types/types.js";
import { type UserGetAllResponseDto } from "#/users/users.js";

const getAll = createAsyncThunk<
  UserGetAllResponseDto,
  undefined,
  AsyncThunkConfig
>(`${SliceName.USERS}/get-all`, (_, { extra }) => {
  const { usersApi } = extra;

  return usersApi.getAll();
});

export { getAll };
