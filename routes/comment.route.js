const express = require("express");
const router = express.Router();
const controller = require("../Comments/module")

router.get("/", (req,res,next) => controller.getList(req, res, next));
router.get("/:boardIdx", (req, res, next) => controller.getOne(req, res, next));
router.post("/:boardIdx", (req, res, next) => controller.postComment(req,res,next));
router.put("/:idx", (req, res, next) => controller.putCmt(req,res,next));
router.delete("/:idx", (req, res, next) => controller.DeleteCmt(req,res,next));

module.exports = router;