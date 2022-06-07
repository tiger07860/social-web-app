const express = require("express");
const router = express.Router();
const userController = require("../controllers/users_conroller");

router.get("/profile", userController.profile);
router.get("/contact",userController.contact);
module.exports = router;
