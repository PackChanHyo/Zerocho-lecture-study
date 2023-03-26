const express = require("express");
const { isLoggeIn, isNotLoggednIn } = require("../middlewares");
const router = express.Router();
const { follow } = require("../controllers/user");

router.post("/:id/follow", isLoggeIn, follow);

module.exports = router;
