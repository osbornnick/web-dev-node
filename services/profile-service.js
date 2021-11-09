let profile = require("../data/profile.json");

const getCurrentProfile = (req, res) => {
    res.json(profile);
};

const updateCurrentProfile = (req, res) => {
    profile = {
        ...profile,
        ...req.body,
    };
    res.sendStatus(200);
};

module.exports = (app) => {
    app.get("/api/profile", getCurrentProfile);
    app.put("/api/profile", updateCurrentProfile);
};
