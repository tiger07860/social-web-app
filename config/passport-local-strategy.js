const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

// Authentication User Using Passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "uname",
    },
    function (uname, password, done) {
      // Find a User and establish the identity
      User.findOne({ uname: uname }, function (err, user) {
        if (err) {
          console.log("Error2");
          return done(err);
        }
        if (!user || user.password != password) {
          console.log("Invalid UserName/ Password");
          return done(null, false);
        } else {
          return done(null, user);
        }
      });
    }
  )
);

//Serialise the User to decide which key is to be Kept in cookie
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//Deserialising the user from the key in the cookies
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.log("Error1");
      return done(err);
    }
    return done(null, user);
  });
});

passport.checkAuthenticated = function(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  return res.redirect('/users/signin');
}

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};

module.exports = passport;
