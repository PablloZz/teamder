import { Button, Checkbox, Input, Link } from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";
import { useAppForm } from "@/hooks/hooks.js";
import {
  type UserSignInRequestDto,
  userSignInValidationSchema,
} from "#/users/users.js";

import { DEFAULT_SIGN_IN_PAYLOAD } from "../../constants/constants.js";
import { PasswordInput } from "../components.js";
import styles from "./styles.module.scss";

type Properties = {
  onSubmit: () => void;
};

const SignInForm: React.FC<Properties> = () => {
  const { control, errors } = useAppForm<UserSignInRequestDto>({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    validationSchema: userSignInValidationSchema,
  });

  return (
    <form>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Welcome, login to your account!</h2>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          control={control}
          errors={errors}
        />
        <PasswordInput
          name="password"
          label="Password"
          placeholder="Password"
          control={control}
          errors={errors}
        />
        <div className={styles.signInControls}>
          <Checkbox
            name="rememberMe"
            label="Remember me"
            showLabel
            control={control}
            errors={errors}
            checkboxStyle="circle"
          />
          <Link to={AppRoute.FORGOT_PASSWORD} className={styles.forgotPassword}>
            Forgot Password?
          </Link>
        </div>
      </div>
      <Button
        label="Sign in"
        className={styles.signInButton}
        onClick={(): void => {}}
      />
      <div className={styles.signUpDescription}>
        Don&apos;t have an account yet?&nbsp;
        <Link to={AppRoute.SIGN_UP} className={styles.signUpLink}>
          Sign Up!
        </Link>
      </div>
    </form>
  );
};

export { SignInForm };
