import { Loader } from "../../../../UI/loader/Loader"
import styles from "./editProfile.module.css"
import { Input } from "../../../../UI/input/Input"
import { Button } from "../../../../UI/button/Button"

function EditProfile(props) {
  if (!props) {
    return <Loader />
  }

  return (
    <>
      <form onSubmit={props.updateData}>
        <div>
          <div className={styles.inputGroup}>
            <label htmlFor="picture">Change Picture:</label>
            <Input
              type="file"
              id="picture"
              name="picture"
              onChange={props.changeInfoHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="login">Change Login:</label>
            <Input
              type="text"
              id="login"
              name="login"
              value={props.changeInfo.login}
              onChange={props.changeInfoHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Change Email:</label>
            <Input
              type="text"
              id="email"
              name="email"
              value={props.changeInfo.email}
              onChange={props.changeInfoHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Change Name:</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={props.changeInfo.name}
              onChange={props.changeInfoHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="surname">Change Surname:</label>
            <Input
              type="text"
              id="surname"
              name="surname"
              value={props.changeInfo.surname}
              onChange={props.changeInfoHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="city">Change city:</label>
            <Input
              type="text"
              id="city"
              name="city"
              value={props.changeInfo.city}
              onChange={props.changeInfoHandler}
            />
          </div>
        </div>
        <Button>Update Profile</Button>
      </form>
      <div className={styles.deleteAccount}>
        <label htmlFor="delete-account">Delte Account:</label>
        <i
          className="fa-solid fa-person-circle-minus"
          id="delete-account"
          onClick={props.deleteAccount}
        ></i>
      </div>
    </>
  )
}

export default EditProfile
