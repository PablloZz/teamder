const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const Post = mongoose.model("Post")
const requireLogin = require("../middleware/requiredLogin")

router.get("/users", (req, res) => {
  User.find()
    .select("-password")
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ error: err }))
})

router.get("/user/:id", (req, res) => {
  User.findById(req.params.id)
    .select("-password")
    .then(user => {
      Post.find({ postedBy: req.params.id })
        .populate("postedBy", "name _id, photo")
        .populate("comments.postedBy", "name _id photo")
        .exec((err, posts) => {
          if (err || !posts) {
            return res.status(422).json({ error: err })
          }
          res.json({ user, posts })
        })
    })
    .catch(() => res.status(404).json({ error: "User was not found" }))
})

router.put("/follow", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    { new: true }
  )
    .select("-password")
    .exec((err, followingUser) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { following: req.body.followId },
        },
        { new: true }
      )
        .select("-password")
        .exec((err, user) => {
          if (err) {
            res.status(422).json({ error: err })
          }
          res.json({ followingUser, user })
        })
    })
})

router.put("/unfollow", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.body.unfollowId,
    {
      $pull: { followers: req.user._id },
    },
    { new: true }
  )
    .select("-password")
    .exec((err, unfollowingUser) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $pull: { following: req.body.unfollowId },
        },
        { new: true }
      )
        .select("-password")
        .exec((err, user) => {
          if (err) {
            res.status(422).json({ error: err })
          }
          res.json({ unfollowingUser, user })
        })
    })
})

router.put("/changeprofilephoto", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { photo: req.body.photo },
    },
    { new: true }
  )
    .select("-password")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      res.json(result)
    })
})

router.put("/changeprofilelogin", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { login: req.body.login },
    },
    { new: true }
  )
    .select("-password")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      res.json(result)
    })
})

router.put("/changeprofileemail", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { email: req.body.email },
    },
    { new: true }
  )
    .select("-password")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      res.json(result)
    })
})

router.put("/changeprofilepassword", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { password: req.body.password },
    },
    { new: true }
  )
    .select("-password")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      res.json(result)
    })
})

router.put("/changeprofilename", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { name: req.body.name },
    },
    { new: true }
  )
    .select("-password")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      res.json(result)
    })
})

router.put("/changeprofilesurname", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { surname: req.body.surname },
    },
    { new: true }
  )
    .select("-password")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      res.json(result)
    })
})

router.put("/changeprofileage", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { age: req.body.age },
    },
    { new: true }
  )
    .select("-password")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      res.json(result)
    })
})

router.put("/changeprofilecity", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { city: req.body.city },
    },
    { new: true }
  )
    .select("-password")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      res.json(result)
    })
})

router.put("/addsocialmedia", requireLogin, (req, res) => {
  console.log(req.body.url)
  User.findByIdAndUpdate(req.user._id, {
    $push: {socialMedia: {url: req.body.url}}
  }, { new: true }).select("-password").exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err })
    }
    res.json(result)
  })
})

module.exports = router
