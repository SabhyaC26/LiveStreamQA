const express = require("express");
const bodyParser = require("body-parser");

// db config connection
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

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

// create an express app
const app = express();

// body parser set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import routes
const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

// basic route
app.get("/", (req, res) => {
  res.json({ message: "welcome to your live stream q&a platform" });
});

// listen for requests
app.listen(3000, () => {
  console.log("server is listening on port 3000!");
});
