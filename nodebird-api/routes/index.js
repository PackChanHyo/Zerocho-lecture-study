const express = require("express");
const { isLoggeIn, isNotLoggednIn } = require("../middlewares/index");
const { renderLogin, createDomain } = require("../controllers/index");
const router = express.Router();

router.get("/", renderLogin);
router.post("/domain", isLoggeIn, createDomain);

module.exports = router;
