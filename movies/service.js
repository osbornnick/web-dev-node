const dao = require("./dao");

const findAllMovies = (req, res) =>
    dao.findAllMovies().then((movies) => res.json(movies));

module.exports = (app) => {
    app.get("/rest/movies", findAllMovies);
};
