import React from "react"

function EditProfile(props) {
  return (
    <>
      <form onSubmit={props.updateData}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="picture">Change Picture:</label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={props.changeInfoHandler}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="login">Change Login:</label>
            <input
              type="text"
              id="login"
              name="login"
              value={props.changeInfo.login}
              onChange={props.changeInfoHandler}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="email">Change Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={props.changeInfo.email}
              onChange={props.changeInfoHandler}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="name">Change Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={props.changeInfo.name}
              onChange={props.changeInfoHandler}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="surname">Change Surname:</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={props.changeInfo.surname}
              onChange={props.changeInfoHandler}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="city">Change city:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={props.changeInfo.city}
              onChange={props.changeInfoHandler}
            />
          </div>
        </div>
        <button>Update Profile</button>
      </form>
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
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
