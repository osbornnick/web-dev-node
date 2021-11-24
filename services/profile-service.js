let dao = require("../db/profile/profile-dao.js");
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

const findProfileById = (req, res) =>
    res.json(dao.findProfileById(req.params.id));

const updateProfile = (req, res) => {
    dao.updateProfile(req.params.id, req.body.profile);
    res.sendStatus(200);
};

module.exports = (app) => {
    app.get("/api/profile", getCurrentProfile);
    app.put("/api/profile", updateCurrentProfile);
    app.get("/rest/profile/:id", findProfileById);
    app.put("/rest/profile/:id", updateProfile);
};
