const express = require("express");
const router = express.Router();
const postController = require("../controllers/post_controller");

router.get("/user1", postController.posts);

module.exports = router;
