import { createSlice } from "@reduxjs/toolkit";

import { DataStatus, SliceName } from "@/enums/enums.js";
import { type ValueOf } from "@/types/types.js";

import { signUp } from "./actions.js";

type State = {
  dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
};

const { reducer, actions } = createSlice({
  initialState,
  name: SliceName.AUTH,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUp.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(signUp.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });
  },
});

export { actions, reducer };
