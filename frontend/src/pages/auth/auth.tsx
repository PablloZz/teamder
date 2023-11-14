import { AppRoute } from "@/enums/enums.js";
import { useAppDispatch, useCallback, useLocation } from "@/hooks/hooks.js";
import { type UserSignUpRequestDto } from "#/users/users.js";
import { actions as authActions } from "~/slices/auth/auth.js";

import {
  AuthLayout,
  SignInForm,
  SignUpForm,
} from "./libs/components/components.js";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const handleSignInSubmit = useCallback((): void => {}, []);

  const handleSignUpSubmit = useCallback(
    (payload: UserSignUpRequestDto): void => {
      void dispatch(authActions.signUp(payload));
    },
    [dispatch],
  );

  const getLayout = (path: string): React.ReactNode => {
    switch (path) {
      case AppRoute.SIGN_IN: {
        return <SignInForm onSubmit={handleSignInSubmit} />;
      }
      case AppRoute.SIGN_UP: {
        return <SignUpForm onSubmit={handleSignUpSubmit} />;
      }
    }

    return null;
  };

  return (
    <>
      <AuthLayout>{getLayout(pathname)}</AuthLayout>
    </>
  );
};

export { Auth };
