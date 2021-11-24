const mongoose = require("mongoose");

module.exports = mongoose.Schema(
    {
        avatarIcon: String,
        userName: String,
        handle: String,
    },
    { collection: "who" }
);
