const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function(user, done) {
 done(null, user);
});
passport.deserializeUser(function(user, done) {
 done(null, user);
});
passport.use(
 new GoogleStrategy(
  {
   clientID: "GOOGLE_CLIENT_ID",
   clientSecret: "GOOGLE_CLIENT_SECRET",
   callbackURL: "http://localhost:3001/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);

// 262420665581-95e45bb03g0v50ab3p9ftt1rp320ma0i.apps.googleusercontent.com CLIENT_ID
// 6wcEw1JKJJOsO4LnVmzU4cXa CLIENT_SECRET