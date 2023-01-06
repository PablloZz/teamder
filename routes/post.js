const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Post = mongoose.model("Post")
const requireLogin = require("../middleware/requiredLogin.js")

router.post("/createpost", requireLogin, (req, res) => {
  const { body, pic } = req.body
  if (!body || !pic) {
    return res
      .status(422)
      .json({ error: "Please, fill in the title and body fields" })
  }
  req.user.password = undefined
  const post = new Post({ body, postedBy: req.user, photo: pic })
  post
    .save()
    .then((result) => res.json({ post: result }))
    .catch((err) => console.log(err))
})

router.get("/allposts", (req, res) => {
  Post.find()
    .populate("postedBy", "name _id photo")
    .populate("comments.postedBy", "name _id photo")
    .then((posts) => res.json({ posts }))
    .catch((err) => res.status(422).json({ error: err }))
})

router.get("/followingposts", requireLogin, (req, res) => {
  Post.find({ postedBy: { $in: req.user.following } })
    .populate("postedBy", "name _id photo")
    .populate("comments.postedBy", "name _id photo")
    .then((posts) => {
      res.json(posts)
    })
    .catch((err) => res.status(422).json({ error: err }))
})

router.get("/myposts", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "name _id photo")
    .populate("comments.postedBy", "name _id photo")
    .then((myposts) => res.json({ posts: myposts }))
})

router.put("/like", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    { new: true }
  )
    .populate("postedBy", "name _id photo")
    .populate("comments.postedBy", "name _id photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      res.json(result)
    })
})

router.put("/unlike", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    { new: true }
  )
    .populate("postedBy", "name _id photo")
    .populate("comments.postedBy", "name _id photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      res.json(result)
    })
})

router.put("/comment", requireLogin, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  }
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    { new: true }
  )
    .populate("comments.postedBy", "name _id photo")
    .populate("postedBy", "name _id photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      console.log(result)
      res.json(result)
    })
})

router.delete("/deletepost/:postId", requireLogin, (req, res) => {
  Post.findById(req.params.postId)
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err })
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json(result)
          })
          .catch((err) => console.log(err))
      }
    })
})

router.delete("/deletecomment/:postId/:commentId", requireLogin, (req, res) => {
  console.log(req.params.postId, req.params.commentId)
  Post.findByIdAndUpdate(
    req.params.postId,
    {
      $pull: { comments: { _id: req.params.commentId } },
    },
    { new: true }
  )
    .populate("comments.postedBy", "_id name photo")
    .populate("postedBy", "_id name photo")
    .exec((err, comment) => {
      if (err || !comment) {
        return res.status(422).json({ error: err })
      }
      res.json(comment)
    })
})

module.exports = router
