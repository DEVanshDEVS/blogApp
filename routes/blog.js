const express = require("express");
const router = express.Router();

// 1. import controllers
const { dummyLink, likePost } = require("../controllers/LikeController");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/PostController");

// 2. Mapping
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);

// 3. export the router
module.exports = router;
