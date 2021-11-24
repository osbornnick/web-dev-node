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
    dao
        .findProfileById("619e74a63e2722f7a9013a04")
        .then((profile) => res.json(profile));

const updateProfile = (req, res) => {
    dao.updateProfile(req.params.id, req.body.profile);
    res.sendStatus(200);
};

module.exports = (app) => {
    app.get("/api/profile", getCurrentProfile);
    app.put("/api/profile", updateCurrentProfile);
    app.get("/rest/profile", findProfileById);
    app.put("/rest/profile/:id", updateProfile);
};
