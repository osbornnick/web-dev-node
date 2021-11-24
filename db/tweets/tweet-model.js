const mongoose = require("mongoose");
const schema = require("./tweet-schema.js");
const model = mongoose.model("TweetModel", schema);
module.exports = model;
