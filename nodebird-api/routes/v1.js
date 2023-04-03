const express = require("express");
const {
  createToken,
  tokenTest,
  getMyPosts,
  getPostsByHashtag,
} = require("../controllers/v1");
const { verifyToken, deprecated } = require("../middlewares");

const router = express.Router();

router.use(deprecated);

router.post("/token", createToken);
router.get("/test", verifyToken, tokenTest);

router.get("/posts/my", verifyToken, getMyPosts);
router.get("/posts/hashtag/:title", verifyToken, getPostsByHashtag);

module.exports = router;
