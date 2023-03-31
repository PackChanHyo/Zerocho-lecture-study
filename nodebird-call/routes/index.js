const express = require("express");
const { getMyPosts, searchByHashtag } = require("../controllers/index");
const router = express.Router();

router.get("/myposts", getMyPosts);
router.get("/search/:hashtag", searchByHashtag);

module.exports = router;
