const AppRoute = {
  ROOT: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  SIGN_UP_ADDITIONAL_INFO: "/sign-up/additional-info",
  SIGN_UP_INTERESTS: "/sign-up/interests",
  FORGOT_PASSWORD: "/sign-up/forgot-password",
  TEAMS: "/teams",
  NOTIFICATIONS: "/notifications",
  PROFILE_$ID: "/profile/:id",
  PROFILE_$ID_INTERESTS: "/profile/:id/interests",
  PROFILE_$ID_SOCIAL_MEDIA: "/profile/:id/social-media",
  PROFILE_$ID_EDIT_PROFILE: "/profile/:id/edit-profile",
} as const;

export { AppRoute };
