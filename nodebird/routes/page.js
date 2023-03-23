const express = require("express");
const { isLoggeIn, isNotLoggednIn } = require("../middlewares");
const {
  renderProfile,
  renderJoin,
  renderMain,
} = require("../controllers/page");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get("/profile", isLoggeIn, renderProfile);

router.get("/join", isNotLoggednIn, renderJoin);

router.get("/", renderMain);

module.exports = router;
