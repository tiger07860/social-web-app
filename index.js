const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = 8000;
const mongoose = require("mongoose");

app.use(express.urlencoded());
app.use(cookieParser());

// Use Express Router
app.use("/", require("./routes"));

//Set Up EJS as View Engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
    return;
  }
  console.log(`Server is running on port:  ${port}`);
});
