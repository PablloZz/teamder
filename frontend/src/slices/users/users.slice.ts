import { createSlice } from "@reduxjs/toolkit";

import { DataStatus, SliceName } from "@/enums/enums.js";
import { type ValueOf } from "@/types/types.js";
import { type UserGetResponseDto } from "#/users/users.js";

import { getAll } from "./actions.js";

type State = {
  users: UserGetResponseDto[];
  dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  users: [],
  dataStatus: DataStatus.IDLE,
};

const { reducer, actions } = createSlice({
  initialState,
  name: SliceName.USERS,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAll.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.users = action.payload.items;
    });
    builder.addCase(getAll.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });
  },
});

export { actions, reducer };
