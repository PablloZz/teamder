import { Button, Input, PasswordInput } from "@/components/components.js";
import { useAppForm } from "@/hooks/hooks.js";

import styles from "./styles.module.scss";

const DEFAULT_EDIT_FIELDS = {
  login: "",
  email: "",
  name: "",
  lastName: "",
  password: "",
  city: "",
  bio: "",
  age: null,
};

const EditProfile: React.FC = () => {
  const { control, errors } = useAppForm({
    defaultValues: DEFAULT_EDIT_FIELDS,
  });

  return (
    <form className={styles.wrapper}>
      <fieldset>
        <legend className="visually-hidden">Edit Profile</legend>
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
        <Input
          name="bio"
          placeholder="Bio"
          label="Biography"
          control={control}
          errors={errors}
          rows={4}
        />
      </fieldset>
      <Button
        label={"Confirm"}
        className={styles.confirmButton}
        onClick={(): void => {}}
      />
    </form>
  );
};

export { EditProfile };
