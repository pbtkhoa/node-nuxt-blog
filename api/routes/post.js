const express = require("express");
const PostController = require("./../controllers/PostController");

const router = express.Router();
router.get("/", PostController.index);

module.exports = router;
