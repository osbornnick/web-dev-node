let dao = require("../db/who/who-dao.js");

const findAllWho = (req, res) => res.json(dao.findAllWho());

module.exports = (app) => {
    app.get("/rest/who", findAllWho);
};
