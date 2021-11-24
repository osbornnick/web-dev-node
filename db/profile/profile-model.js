const mongoose = require("mongoose");
const schema = require("./profile-schema.js");
const model = mongoose.model("ProfileModel", schema);
module.exports = model;
