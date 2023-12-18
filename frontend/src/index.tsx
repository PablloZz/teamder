import "~/assets/css/styles.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App, RouterProvider, StoreProvider } from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";
import { store } from "@/packages/store/store.js";
import { Auth } from "~/pages/auth/auth.js";
import { Notifications } from "~/pages/notifications/notifications.js";
import {
  EditProfile,
  Interests,
  Profile,
  SocialMedia,
} from "~/pages/profile/profile.js";

createRoot(document.querySelector("#root") as HTMLElement).render(
  <StrictMode>
    <StoreProvider store={store.instance}>
      <RouterProvider
        routes={[
          {
            path: AppRoute.ROOT,
            element: <App />,
            children: [
              { path: AppRoute.ROOT, element: "Root" },
              { path: AppRoute.SIGN_IN, element: <Auth /> },
              { path: AppRoute.SIGN_UP, element: <Auth /> },
              { path: AppRoute.SIGN_UP_ADDITIONAL_INFO, element: <Auth /> },
              { path: AppRoute.SIGN_UP_INTERESTS, element: <Auth /> },
              {
                path: AppRoute.PROFILE_$ID,
                element: <Profile />,
                children: [
                  {
                    path: AppRoute.PROFILE_$ID_INTERESTS,
                    element: <Interests />,
                  },
                  {
                    path: AppRoute.PROFILE_$ID_SOCIAL_MEDIA,
                    element: <SocialMedia />,
                  },
                  {
                    path: AppRoute.PROFILE_$ID_EDIT_PROFILE,
                    element: <EditProfile />,
                  },
                ],
              },
              { path: AppRoute.NOTIFICATIONS, element: <Notifications /> },
            ],
          },
        ]}
      />
    </StoreProvider>
  </StrictMode>,
);
