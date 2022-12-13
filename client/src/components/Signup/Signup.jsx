import React, { useState } from "react"
import styles from "./Signup.module.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Signup() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    login: "",
    email: "",
    name: "",
    surname: "",
    password: "",
    city: "",
    age: "",
    picture: "",
  })
  const [url, setUrl] = useState(undefined)

  useEffect(() => {
    postUserData()
    // eslint-disable-next-line
  }, [url])

  const formChangeHandler = event => {
    const { name, value, files, type } = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "file" ? files[0] : value,
      }
    })
  }

  const postPicture = picture => {
    const data = new FormData()
    data.append("file", picture)
    data.append("upload_preset", "teamder")
    data.append("cloud_name", "dn4hb36zi")

    fetch("https://api.cloudinary.com/v1_1/dn4hb36zi/upload", {
      method: "post",
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        setUrl(data.secure_url)
      })
  }

  const postUserData = () => {
    if (
      String(formData.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      fetch("/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: formData.login,
          email: formData.email,
          name: formData.name,
          surname: formData.surname,
          password: formData.password,
          city: formData.city,
          age: formData.age,
          photo: url
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            return console.log(data)
          }
          console.log(data)
          navigate("/signin")
        })
        .catch(err => console.log(err))
    } else {
      console.log("Invalid email")
    }
  }

  const registerUser = event => {
    event.preventDefault()

    if (formData.picture) {
      postPicture(formData.picture)
      return
    }

    postUserData()
  }

  return (
    <div className={styles.flex}>
      <img src="/images/signup-bg.png" alt="background" />
      <div className={styles.signup}>
        <img src="/images/signup-logo.png" alt="logo" />
        <div className={styles.progress}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
        <form className={styles.signupForm}>
          <h2>Basic information</h2>
          <div>
            <input
              type="text"
              name="login"
              placeholder="Login"
              value={formData.login}
              onChange={formChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={formChangeHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={formChangeHandler}
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={formChangeHandler}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={formChangeHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={formChangeHandler}
            />
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={formChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="picture">Upload your photo</label>
            <input
              type="file"
              name="picture"
              id="picture"
              onChange={formChangeHandler}
            />
          </div>
          <button onClick={e => registerUser(e)} className={styles.button}>
            Continue
          </button>
          <div className={styles.signinAccount}>
            <p>You already have an account?</p>&nbsp;&nbsp;&nbsp;
            <a href="/signin">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
