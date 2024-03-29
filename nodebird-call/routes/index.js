const express = require("express");
const {
  getMyPosts,
  searchByHashtag,
  renderMain,
} = require("../controllers/index");
const router = express.Router();

router.get("/myposts", getMyPosts);
router.get("/search/:hashtag", searchByHashtag);

router.get("/", renderMain);

module.exports = router;
