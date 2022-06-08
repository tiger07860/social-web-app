const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = 8000;
const mongoose = require("mongoose");

// Used for Session Cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const db = require("./config/mongoose");

//For Sass files
const sassMiddleware = require("node-sass-middleware");

app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: true,
    outputStyle: "extended",
    prefix: "/css",
  })
);

app.use(express.urlencoded());
app.use(cookieParser());

//Set Up EJS as View Engine
app.set("view engine", "ejs");
app.set("views", "./views");

//MongoStore is used to store Session Cookie in db
app.use(
  session({
    name: "codial",
    //TODO Change secret before deployement
    secret: "blahblahblah",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// Use Express Router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
    return;
  }
  console.log(`Server is running on port:  ${port}`);
});
