const express = require("express");
const {
  renderJoin,
  renderMain,
  renderProfile,
} = require("../controolers/page");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get("/profile", renderProfile);
router.get("/join", renderJoin);
router.get("/", renderMain);

module.exports = router;
