import { getAll } from "./actions.js";
import { actions } from "./users.slice.js";

const allActions = {
  ...actions,
  getAll,
};

export { allActions as actions };
export { reducer } from "./users.slice.js";
