const AppRoute = {
  ROOT: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  SIGN_UP_ADDITIONAL_INFO: "/sign-up/additional-info",
  SIGN_UP_INTERESTS: "/sign-up/interests",
  FORGOT_PASSWORD: "/sign-up/forgot-password",
  TEAMS: "teams",
  NOTIFICATIONS: "notifications",
  PROFILE_$ID: "profile/:id",
} as const;

export { AppRoute };
