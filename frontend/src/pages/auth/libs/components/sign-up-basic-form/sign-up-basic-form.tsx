import { Button, Input, Link } from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";
import { useAppForm } from "@/hooks/hooks.js";
import {
  userSignInValidationSchema,
  type UserSignUpBasic,
} from "#/users/users.js";

import { DEFAULT_SIGN_UP_BASIC_PAYLOAD } from "../../constants/constants.js";
import { SignUpProgressStep } from "../../enums/enums.js";
import { PasswordInput, SignUpProgress } from "../components.js";
import styles from "./styles.module.scss";

const SignUpBasicForm: React.FC = () => {
  const { control, errors } = useAppForm<UserSignUpBasic>({
    defaultValues: DEFAULT_SIGN_UP_BASIC_PAYLOAD,
    validationSchema: userSignInValidationSchema,
  });

  return (
    <form>
      <div className={styles.wrapper}>
        <SignUpProgress step={SignUpProgressStep.FIRST} />
        <h2 className={styles.header}>Basic Information</h2>
        <Input
          name="login"
          type="text"
          placeholder="Login"
          label="Login"
          control={control}
          errors={errors}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          control={control}
          errors={errors}
        />
        <div>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            label="Name"
            control={control}
            errors={errors}
          />
          <Input
            name="lastName"
            type="text"
            placeholder="Last Name"
            label="Last Name"
            control={control}
            errors={errors}
          />
        </div>
        <PasswordInput
          name="password"
          label="Password"
          placeholder="Password"
          control={control}
          errors={errors}
        />
        <div>
          <Input
            name="city"
            type="text"
            placeholder="City"
            label="City"
            control={control}
            errors={errors}
          />
          <Input
            name="age"
            type="number"
            placeholder="Age"
            label="Age"
            control={control}
            errors={errors}
          />
        </div>
      </div>
      <Button
        label="Continue"
        className={styles.signUpButton}
        onClick={(): void => {}}
      />
      <div className={styles.signInDescription}>
        Already have an account?&nbsp;
        <Link to={AppRoute.SIGN_IN} className={styles.signInLink}>
          Sign In!
        </Link>
      </div>
    </form>
  );
};

export { SignUpBasicForm };
