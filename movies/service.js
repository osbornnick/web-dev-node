const dao = require("./dao");

const findAllMovies = (req, res) =>
    dao.findAllMovies().then((movies) => res.json(movies));

const deleteMovie = (req, res) =>
    dao.deleteMovie(req.params.id).then((status) => res.send(status));

const createMovie = (req, res) =>
    dao.createMovie(req.body).then((insertedMovie) => res.json(insertedMovie));

const findMovieById = (req, res) =>
    dao.findMovieById(req.params.id).then((movie) => res.json(movie));

const updateMovie = (req, res) =>
    dao
        .updateMovie(req.params.id, req.body)
        .then((status) => res.send(status))
        .catch(console.log);

module.exports = (app) => {
    app.get("/rest/movies", findAllMovies);
    app.delete("/rest/movies/:id", deleteMovie);
    app.post("/rest/movies", createMovie);
    app.get("/rest/movies/:id", findMovieById);
    app.put("/rest/movies/:id", updateMovie);
};
