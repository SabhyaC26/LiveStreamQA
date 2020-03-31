const mongoose = require("mongoose");

const LivestreamSchema = mongoose.Schema({
  user: {
    // TODO: change type
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  questions: {
    type: [String]
  }
});

module.exports = mongoose.model("Livestreams", LivestreamSchema);
