const express = require("express");
const router = express.Router();
const users = require("./users");
const app = express();
const homeController = require("../controllers/home_controller");

console.log("Router Loaded");

router.get("/", homeController.home);

router.use("/users", users);

router.use("/posts", require("./posts"));

module.exports = router;
