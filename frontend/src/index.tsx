import "~/assets/css/styles.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App, RouterProvider, StoreProvider } from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";
import { store } from "@/packages/store/store.js";
import { Auth } from "~/pages/auth/auth.js";
import {
  Event,
  EventDescription,
  EventForum,
  EventMembers,
} from "~/pages/event/event.js";
import {
  MyCompletedEvents,
  MyCurrentEvents,
  MyEvents,
} from "~/pages/my-events/my-events.js";
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
                path: AppRoute.MY_EVENTS,
                element: <MyEvents />,
                children: [
                  {
                    path: AppRoute.MY_EVENTS_CURRENT,
                    element: <MyCurrentEvents />,
                  },
                  {
                    path: AppRoute.MY_EVENTS_COMPLETED,
                    element: <MyCompletedEvents />,
                  },
                ],
              },
              {
                path: AppRoute.EVENTS_$ID,
                element: <Event />,
                children: [
                  {
                    path: AppRoute.EVENTS_$ID_DESCRIPTION,
                    element: <EventDescription />,
                  },
                  {
                    path: AppRoute.EVENTS_$ID_MEMBERS,
                    element: <EventMembers />,
                  },
                  {
                    path: AppRoute.EVENTS_$ID_FORUM,
                    element: <EventForum />,
                  },
                ],
              },
              { path: AppRoute.NOTIFICATIONS, element: <Notifications /> },
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
            ],
          },
        ]}
      />
    </StoreProvider>
  </StrictMode>,
);
