const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mp_db");

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Error in Connecting to Database!!!")
);

db.once("open", function () {
  console.log("Database Connection Successfully!!!!");
});
