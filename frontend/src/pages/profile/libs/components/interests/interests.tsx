import { Button, Checkbox } from "@/components/components.js";
import { makeFirstLetterUppercase } from "@/helpers/helpers.js";
import { useAppForm, useCallback, useState } from "@/hooks/hooks.js";
import { type UserSignUpInterests } from "#/users/users.js";

import styles from "./styles.module.scss";

const MOCKED_INTERESTS: UserSignUpInterests = {
  sport: false,
  programming: false,
  swimming: false,
  dance: false,
  bowling: false,
  traveling: false,
  singing: false,
  music: false,
};

const Interests: React.FC = () => {
  const { control, errors } = useAppForm({
    defaultValues: MOCKED_INTERESTS,
  });
  const [editMode, setEditMode] = useState(false);

  const handleChangeEditMode = useCallback((): void => {
    setEditMode((previousEditMode) => !previousEditMode);
  }, []);

  return (
    <form className={styles.wrapper}>
      <fieldset>
        <legend className="visually-hidden">Interests</legend>
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
        <ul className={styles.interests} role="list">
          {(Object.keys(MOCKED_INTERESTS) as (keyof UserSignUpInterests)[]).map(
            (interest) => (
              <li key={interest}>
                <Checkbox
                  name={interest}
                  control={control}
                  errors={errors}
                  label={makeFirstLetterUppercase(interest)}
                  checkboxStyle="square"
                  showLabel
                  showCheckbox={editMode}
                  className={styles.checkbox}
                  labelClassName={styles.checkboxLabel}
                />
              </li>
            ),
          )}
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

export { Interests };
