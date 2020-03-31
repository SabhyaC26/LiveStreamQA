const mongoose = require("mongoose");
const livestream = require("./Livestream.js");

const LivestreamSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  channel: {
    type: String,
    required: true
  },
  streams: {
    type: [livestream],
    required: true
  }
});

module.exports = mongoose.model("Users", UserSchema);
