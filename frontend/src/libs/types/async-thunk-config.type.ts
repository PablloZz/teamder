import { type store } from "@/packages/store/store.js";

type AsyncThunkConfig = {
  state: ReturnType<typeof store.instance.getState>;
  dispatch: typeof store.instance.dispatch;
  extra: typeof store.extraArguments;
};

export { type AsyncThunkConfig };
