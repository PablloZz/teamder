import { Button, Checkbox, Link } from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";
import { makeFirstLetterUppercase } from "@/helpers/helpers.js";
import { useAppForm } from "@/hooks/hooks.js";
import {
  userSignInValidationSchema,
  type UserSignUpInterests,
} from "#/users/users.js";

import { DEFAULT_SIGN_UP_INTERESTS_PAYLOAD } from "../../constants/constants.js";
import { SignUpProgressStep } from "../../enums/enums.js";
import { SignUpProgress } from "../components.js";
import styles from "./styles.module.scss";

type Properties = {
  onSubmit: () => void;
};

const SignUpInterestsForm: React.FC<Properties> = () => {
  const { control, errors } = useAppForm<UserSignUpInterests>({
    defaultValues: DEFAULT_SIGN_UP_INTERESTS_PAYLOAD,
    validationSchema: userSignInValidationSchema,
  });

  return (
    <form>
      <SignUpProgress step={SignUpProgressStep.THIRD} />
      <fieldset className={styles.wrapper}>
        <legend className={styles.header}>Interests</legend>
        <ul className={styles.interests}>
          {(
            Object.keys(
              DEFAULT_SIGN_UP_INTERESTS_PAYLOAD,
            ) as (keyof UserSignUpInterests)[]
          ).map((interest) => {
            return (
              <li key={interest}>
                <Checkbox
                  name={interest}
                  control={control}
                  errors={errors}
                  label={makeFirstLetterUppercase(interest)}
                  checkboxStyle="square"
                  showLabel
                />
              </li>
            );
          })}
        </ul>
      </fieldset>
      <Button
        label="Sign Up"
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

export { SignUpInterestsForm };
