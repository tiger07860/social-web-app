const express = require("express");
const router = express.Router();
const userController = require("../controllers/users_conroller");
const passport = require("passport");

router.get("/profile",passport.checkAuthenticated,userController.profile);
router.get("/contact", userController.contact);
router.get("/signup", userController.signup);
router.get("/signin", userController.signin);
router.post("/create", userController.create);

router.post(
  "/check",
  passport.authenticate("local", { failureRedirect: "/users/signin" }),
  userController.checkin
);

router.get("/signout", userController.destroy);

module.exports = router;
