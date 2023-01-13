const express = require("express");
const router = express.Router();
const board = require("./board.route");
const Comment = require("./comment.route");

router.use("/board", board);
router.use("/comment", Comment);

module.exports = router;
