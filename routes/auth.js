const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../keys")
const requireLogin = require("../middleware/requiredLogin")

router.post("/signup", (req, res) => {
  const { name, email, password, login, surname, city, age, photo } = req.body
  console.log(name, email, password, login, surname, city, age, photo)
  if (!name || !email || !password || !login || !surname || !city || !age) {
    return res.status(422).json({ error: "Please, fill in all the fields" })
  }
  User.findOne({ email })
    .then(savedUser => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "User with that email is already exist" })
      }
      bcrypt.hash(password, 12).then(hashedPassword => {
        const user = new User({
          name,
          email,
          password: hashedPassword,
          login,
          surname,
          city,
          age,
          photo,
        })
        user
          .save()
          .then(() => res.json({ message: "User signed up successfully" }))
          .catch(error => console.log(error))
      })
    })
    .catch(error => console.log(error))
})

router.post("/signin", (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(422).json({ error: "Please, fill in all the fields" })
  }
  User.findOne({ email }).then(savedUser => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email or password" })
    }
    bcrypt.compare(password, savedUser.password).then(isCorrect => {
      if (isCorrect) {
        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
        const {
          _id,
          name,
          email,
          login,
          surname,
          city,
          age,
          followers,
          following,
          photo,
          socialMedia
        } = savedUser
        res.json({
          token,
          user: {
            _id,
            name,
            email,
            login,
            surname,
            city,
            age,
            followers,
            following,
            photo,
            socialMedia
          },
        })
      } else {
        return res.status(422).json({ error: "Invalid email or password" })
      }
    })
  })
})

router.delete("/deleteaccount/:userId", requireLogin, (req, res) => {
  User.findOne({ _id: req.params.userId }).then(user => {
    user
      .remove()
      .then(() => res.json("User removed successfully"))
      .catch(err => res.status(422).json({ error: err }))
  })
})

module.exports = router
