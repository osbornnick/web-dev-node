const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        handle: String,
        name: String,
        profilePicture: String,
        bannerPicture: String,
        bio: String,
        location: String,
        dateOfBirth: String,
        dateJoined: String,
        followingCount: { type: Number, defaultValue: 0 },
        followersCount: { type: Number, defaultValue: 0 },
        tweetCount: { type: Number, defaultValue: 0 },
        website: String,
    },
    { collection: "profiles" }
);

module.exports = schema;
