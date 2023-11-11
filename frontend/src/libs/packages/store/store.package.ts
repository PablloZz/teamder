import {
  type AnyAction,
  type MiddlewareArray,
  type ThunkMiddleware,
} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore.js";

import { AppEnvironment } from "@/enums/enums.js";
import { type IConfig } from "@/packages/config/config.js";
import { authApi } from "#/auth/auth.js";
import { usersApi } from "#/users/users.js";
import { reducer as authReducer } from "~/slices/auth/auth.js";
import { reducer as usersReducer } from "~/slices/users/users.js";

type RootReducer = {
  auth: ReturnType<typeof authReducer>;
  users: ReturnType<typeof usersReducer>;
};

type ExtraArguments = {
  authApi: typeof authApi;
  usersApi: typeof usersApi;
};

class Store {
  public instance: ReturnType<
    typeof configureStore<
      RootReducer,
      AnyAction,
      MiddlewareArray<[ThunkMiddleware<RootReducer, AnyAction, ExtraArguments>]>
    >
  >;

  public constructor(config: IConfig) {
    this.instance = configureStore({
      devTools: config.ENV.APP.ENVIRONMENT !== AppEnvironment.PRODUCTION,
      reducer: {
        auth: authReducer,
        users: usersReducer,
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          thunk: {
            extraArgument: this.extraArguments,
          },
        });
      },
    });
  }

  public get extraArguments(): ExtraArguments {
    return { authApi, usersApi };
  }
}

export { Store };
