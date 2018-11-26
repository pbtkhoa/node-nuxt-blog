const express = require("express");
const ArticleController = require("./../controllers/ArticleController");

const router = express.Router();
router.get("/", ArticleController.index);

module.exports = router;
