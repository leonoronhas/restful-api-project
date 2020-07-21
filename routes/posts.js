const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

// Retrieve all posts from DB
router.get("/", async (request, response) => {
  try {
    // There are several functions to choose from,
    // .find() will return everything under the Post collection
    const posts = await Post.find();
    response.json(posts);
  } catch (error) {
    response.json({ message: error });
  }
});

// Submit post to DB
router.post("/", async (request, response) => {
  const post = new Post({
    title: request.body.title,
    description: request.body.description,
  });
  try {
    const savedPost = await post.save();
    response.status(200).json(savedPost);
  } catch (err) {
    response.json({ message: err });
  }
});

// Retrieve a specific post
router.get("/:postId", async (request, response) => {
  try {
    const post = await Post.findById(request.params.postId);
    response.json(post);
  } catch (error) {
    response.json({ message: error });
  }
});

// Delete post
router.delete("/:postId", async (request, response) => {
  try {
    const removedPost = await Post.remove({ _id: request.params.postId });
    response.json(removedPost);
  } catch (error) {
    response.json({ message: error });
  }
});

// Update a post [in this case, title only]
router.patch("/:postId", async (request, response) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: request.params.postId },
      { $set: { title: request.body.title } }
    );
  } catch (error) {
    response.json({ message: error });
  }
});

module.exports = router;
