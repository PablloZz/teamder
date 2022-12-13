const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  login: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    default: "https://res.cloudinary.com/dn4hb36zi/image/upload/v1670415109/avatar_2_nb2ubr.png"
  },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
  socialMedia: [{url: String}]
})

mongoose.model("User", userSchema)
