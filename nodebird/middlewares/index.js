exports.isLoggeIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    // 패스포트 통해서 로그인 했니?
    next();
  } else {
    res.status(403).send("로그인 필요");
  }
};

exports.isNotLoggednIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // 패스포트 통해서 로그인 안했니?
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태입니다.");
    res.redirect(`/?error=${message}`); // localhost:8001?error=메시지
  }
};
