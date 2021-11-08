let movies = [
    { _id: "123", title: "Aliens", rating: 4.5 },
    { _id: "234", title: "Terminator", rating: 4.8 },
    { _id: "345", title: "Avatar", rating: 4.7 },
];

const getAllMovies = (req, res) => res.json(movies);
const deleteMovie = (req, res) => {
    const id = req.params["mid"];
    movies = movies.filter((m) => m._id !== id);
    res.json(movies);
};

const createMovie = (req, res) => {
    const movie = req.body;
    movies = [...movies, movie];
    res.json(movies);
};

const saveMovie = (req, res) => {
    const newMovie = req.body;
    const movieId = req.params["mid"];
    console.log(movies);
    movies = movies.map((movie) => (movie._id === movieId ? newMovie : movie));
    console.log(movies);
    res.json(movies);
};
module.exports = (app) => {
    app.get("/api/movies", getAllMovies);
    app.delete("/api/movies/:mid", deleteMovie);
    app.post("/api/movies", createMovie);
    app.put("/api/movies/:mid", saveMovie);
};
