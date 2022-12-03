const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const Post = mongoose.model("Post")

router.get("/users", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ error: err }))
})

router.get("/user/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
    
      Post.find({ postedBy: req.params.id })
        .populate("postedBy", "name _id")
        .populate("comments.postedBy", "name _id")
        .exec((err, posts) => {
          if (err || !posts) {
            return res.status(422).json({ error: err })
          }
          res.json({ user, posts })
        })
    })
    .catch(() => res.status(404).json({ error: "User was not found" }))
})

module.exports = router
