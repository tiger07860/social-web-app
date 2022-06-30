const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../../../models/user");

module.exports.createSession = async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || user.password != req.body.password) {
      return res.json(422, { message: "Invalid UserName Or Password" });
    }
    return res.json(200, {
      message: "Log In Success, Your token encrypted!!!",
      data: {
        token: jwt.sign(user.toJSON(), "tiger", { expiresIn: "1000000" }),
      },
    });
  } catch (err) {
    console.log("Error", err);
    return res.json(500, { message: "Internal Server Error" });
  }
};
