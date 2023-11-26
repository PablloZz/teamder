import { Button, Input, Link } from "@/components/components.js";
import { AppRoute } from "@/enums/enums.js";
import { useAppForm } from "@/hooks/hooks.js";
import {
  userSignInValidationSchema,
  type UserSignUpAdditionalInfo,
} from "#/users/users.js";

import { DEFAULT_SIGN_UP_ADDITIONAL_INFO_PAYLOAD } from "../../constants/constants.js";
import { SignUpProgressStep } from "../../enums/enums.js";
import { SignUpProgress } from "../components.js";
import styles from "./styles.module.scss";

const SignUpAdditionalInfoForm: React.FC = () => {
  const { control, errors } = useAppForm<UserSignUpAdditionalInfo>({
    defaultValues: DEFAULT_SIGN_UP_ADDITIONAL_INFO_PAYLOAD,
    validationSchema: userSignInValidationSchema,
  });

  return (
    <form>
      <div className={styles.wrapper}>
        <SignUpProgress step={SignUpProgressStep.SECOND} />
        <h2 className={styles.header}>Additional Information</h2>
        <Input
          name="bio"
          type="text"
          placeholder="Bio"
          label="Bio"
          control={control}
          errors={errors}
          rows={4}
        />
        <Input
          name="socialMediaUrlOne"
          type="text"
          placeholder="Social Media Url #1"
          label="Social Media Url #1"
          control={control}
          errors={errors}
        />
        <Input
          name="socialMediaUrlTwo"
          type="text"
          placeholder="Social Media Url #2"
          label="Social Media Url #2"
          control={control}
          errors={errors}
        />
        <Input
          name="socialMediaUrlThree"
          type="text"
          placeholder="Social Media Url #3"
          label="Social Media Url #3"
          control={control}
          errors={errors}
        />
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

export { SignUpAdditionalInfoForm };
