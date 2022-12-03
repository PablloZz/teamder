const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  login: {
    type: String,
    require: true
  },
  surname: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  age: {
    type: String,
    require: true
  },
})

mongoose.model("User", userSchema)