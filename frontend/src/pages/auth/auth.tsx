import { AppRoute } from "@/enums/enums.js";
import { useCallback, useLocation } from "@/hooks/hooks.js";

import {
  AuthLayout,
  SignInForm,
  SignUpAdditionalInfoForm,
  SignUpBasicForm,
  SignUpInterestsForm,
} from "./libs/components/components.js";

const Auth: React.FC = () => {
  const { pathname } = useLocation();

  const handleSignInSubmit = useCallback((): void => {}, []);

  const handleSignUpSubmit = useCallback(() => {}, []);

  const getLayout = (path: string): React.ReactNode => {
    switch (path) {
      case AppRoute.SIGN_IN: {
        return <SignInForm onSubmit={handleSignInSubmit} />;
      }
      case AppRoute.SIGN_UP: {
        return <SignUpBasicForm />;
      }
      case AppRoute.SIGN_UP_ADDITIONAL_INFO: {
        return <SignUpAdditionalInfoForm />;
      }
      case AppRoute.SIGN_UP_INTERESTS: {
        return <SignUpInterestsForm onSubmit={handleSignUpSubmit} />;
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
