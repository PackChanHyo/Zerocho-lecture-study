const express = require("express");
const passport = require("passport");

const { isLoggeIn, isNotLoggednIn } = require("../middlewares/");
const { join, login, logout } = require("../controllers/auth");

const router = express.Router();

// POST /auth/join
router.post("/join", isNotLoggednIn, join);

// POST /auth/login
router.post("/login", isNotLoggednIn, login);

// GET /auth/logout
router.get("/logout", isLoggeIn, logout);

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/?loginError=카카오로그인 실패",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
