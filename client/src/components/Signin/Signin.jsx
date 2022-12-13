import React, { useState } from "react"
import styles from "./Signin.module.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setAuthUserData } from "../../redux/auth-reducer"

function Signin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({email: "", password: ""})

  const formChangeHandler = event => {
    const { name, value } = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  const signIn = e => {
    e.preventDefault()
    if (
      String(formData.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      fetch("/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            return console.log(data)
          }
          dispatch(setAuthUserData(data.user))
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))
          navigate("/profile/posts")
        })
    } else {
      console.log("Invalid email")
    }
  }

  return (
    <div className={styles.flex}>
      <img src="/images/signup-bg.png" alt="background" />
      <div className={styles.signin}>
        <img src="/images/signup-logo.png" alt="logo" />
        <form className={styles.signinForm}>
          <h2>Welcome, login to your account</h2>
          <div>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={formData.email}
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
          <div className={styles.passwordDetailsBlock}>
            <p>
              <input type="radio" />
              <span>Remember me</span>
            </p>
            <NavLink to="/">Forgot password?</NavLink>
          </div>
          <button onClick={e => signIn(e)} className={styles.button}>
            Continue
          </button>
          <div className={styles.createAccount}>
            <p>Don't have an account yet?</p>&nbsp;&nbsp;&nbsp;
            <a href="/signup">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
