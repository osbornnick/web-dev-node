let dao = require("../db/who/who-dao.js");

const findAllWho = (req, res) => dao.findAllWho().then((who) => res.json(who));

module.exports = (app) => {
    app.get("/rest/who", findAllWho);
};
