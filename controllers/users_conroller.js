const db = require("../config/mongoose");
const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("profile", {
    title: "profile",
  });
};

module.exports.contact = function (req, res) {
  return res.end("<h1>98323293289</h1>");
};

module.exports.signup = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("signup");
};

module.exports.signin = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("signin");
};

module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ uname: req.body.uname }, function (err, user) {
    if (err) {
      console.log("Error : ", err);
      return;
    }
    if (user) {
      return res.redirect("back");
    } else {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("Error :", err);
          return;
        }
        return res.redirect("/users/signin");
      });
    }
  });
};

module.exports.checkin = function (req, res) {
  return res.redirect("/");
};

module.exports.destroy = function (req, res) {
  req.logout(function(err) {
        if (err) { return next(err); }
      });
  return res.redirect('/');
};
