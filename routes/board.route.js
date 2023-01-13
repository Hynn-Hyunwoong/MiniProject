const express = require("express");
const router = express.Router();
const controller = require("../boards/module");

router.get("/", (req, res, next) => controller.getList(req, res, next));

router.get("/:idx", (req, res, next) => controller.getOne(req, res, next));

router.post("/", (req, res, next) => controller.postBoard(req, res, next));

router.put("/:idx", (req, res, next) => controller.putBoard(req, res, next));

router.delete("/:idx", (req, res, next) => controller.deleteBoard(req, res, next));

module.exports = router;
