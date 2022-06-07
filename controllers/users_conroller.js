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
  return res.render("signup");
};

module.exports.signin = function (req, res) {
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

module.exports.check = function (req, res) {
  User.findOne(
    { uname: req.body.uname, password: req.body.password },
    function (err, user) {
      if (err) {
        console.log("Error");
        return;
      }
      if (!user) {
        return res.redirect("back");
      } else {
        console.log(user);
        return res.redirect("/");
      }
    }
  );
};
