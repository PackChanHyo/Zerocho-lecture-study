const passport = require("passport");
const User = require("../models/user");
const { Strategy: KakaoStrategy } = require("passport-kakao");

module.exports = () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: "/auth/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log("profile", profile);
        try {
          const user = await User.findOne({
            where: { snsId: profile.id, provider: "kakao" },
          });
          if (user) {
            done(null, user);
          } else {
            const newUser = await User.create({
              email: profile._json?.kakao_account?.email,
              nick: profile.displayName,
              snsId: profile.id,
              provider: "kakao",
            });
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
