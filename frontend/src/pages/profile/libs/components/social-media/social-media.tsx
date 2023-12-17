import { Button, Icon, Input } from "@/components/components.js";
import { useAppForm, useCallback, useState } from "@/hooks/hooks.js";

import styles from "./styles.module.scss";

const MOCKED_SOCIAL_MEDIA: Record<string, string> = {
  socialMediaOne: "https://www.instagram.com/pavloskiy/?hl=en",
  socialMediaTwo: "https://twitter.com/Zety5",
  socialMediaThree: "https://www.facebook.com/profile.php?id=10001730147",
};

const SocialMedia: React.FC = () => {
  const { control, errors } = useAppForm({
    defaultValues: MOCKED_SOCIAL_MEDIA,
  });
  const [editMode, setEditMode] = useState(false);

  const handleChangeEditMode = useCallback((): void => {
    setEditMode((previousEditMode) => !previousEditMode);
  }, []);

  return (
    <form className={styles.wrapper}>
      <fieldset>
        <legend className="visually-hidden">Social Media</legend>
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
        <ul className={styles.socialMedia} role="list">
          <li className={styles.socialMediaItem}>
            {editMode ? (
              <>
                <Icon
                  iconName="socialMedia"
                  className={styles.socialMediaIcon}
                />
                <Input
                  type="text"
                  name="socialMediaOne"
                  label="Social Media URL"
                  control={control}
                  errors={errors}
                  placeholder="Social Media URL"
                  className={styles.editInput}
                />
              </>
            ) : (
              <>
                <Icon
                  iconName="instagram"
                  className={styles.socialMediaIcon}
                  ariaLabel="Instagram"
                  ariaRole="img"
                />
                <span className={styles.socialMediaUrl}>
                  {MOCKED_SOCIAL_MEDIA.socialMediaOne}
                </span>
              </>
            )}
          </li>
          <li className={styles.socialMediaItem}>
            {editMode ? (
              <>
                <Icon
                  iconName="socialMedia"
                  className={styles.socialMediaIcon}
                />
                <Input
                  type="text"
                  name="socialMediaTwo"
                  label="Social Media URL"
                  control={control}
                  errors={errors}
                  placeholder="Social Media URL"
                  className={styles.editInput}
                />
              </>
            ) : (
              <>
                <Icon
                  iconName="twitter"
                  className={styles.socialMediaIcon}
                  ariaLabel="Twitter"
                  ariaRole="img"
                />
                <span className={styles.socialMediaUrl}>
                  {MOCKED_SOCIAL_MEDIA.socialMediaTwo}
                </span>
              </>
            )}
          </li>
          <li className={styles.socialMediaItem}>
            {editMode ? (
              <>
                <Icon
                  iconName="socialMedia"
                  className={styles.socialMediaIcon}
                />
                <Input
                  type="text"
                  name="socialMediaThree"
                  label="Social Media URL"
                  control={control}
                  errors={errors}
                  placeholder="Social Media URL"
                  className={styles.editInput}
                />
              </>
            ) : (
              <>
                <Icon
                  iconName="facebook"
                  className={styles.socialMediaIcon}
                  ariaLabel="Facebook"
                  ariaRole="img"
                />
                <span className={styles.socialMediaUrl}>
                  {MOCKED_SOCIAL_MEDIA.socialMediaThree}
                </span>
              </>
            )}
          </li>
        </ul>
      </fieldset>
      <Button
        label={editMode ? "Confirm" : "Edit"}
        className={styles.editButton}
        onClick={editMode ? (): void => {} : handleChangeEditMode}
      />
    </form>
  );
};

export { SocialMedia };
