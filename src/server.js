const express = require("express");
const bodyParser = require("body-parser");

// db config connection
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create an express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("succesfully connected to DB");
  })
  .catch(err => {
    console.log("could not connect to DB...", err);
    process.exit();
  });

// basic route
app.get("/", (req, res) => {
  res.json({ message: "welcome to your live stream q&a platform" });
});

// listen for requests
app.listen(3000, () => {
  console.log("server is listening on port 3000!");
});
