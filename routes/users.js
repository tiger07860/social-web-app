const express = require("express");
const router = express.Router();
const userController = require("../controllers/users_conroller");

router.get("/profile", userController.profile);
router.get("/contact", userController.contact);
router.get("/signup", userController.signup);
router.get("/signin", userController.signin);
router.post("/create", userController.create);
router.post("/check", userController.check);
module.exports = router;
