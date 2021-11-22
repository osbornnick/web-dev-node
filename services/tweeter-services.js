let dao = require("../db/tweets/tweet-dao.js");
let tweets = require("../data/tweets.json");

const findAllTweets = (req, res) => {
    res.json(dao.findAllTweets());
};

const postNewTweet = (req, res) => {
    const newTweet = {
        _id: new Date().getTime() + "",
        topic: "Web Development",
        userName: "ReactJS",
        verified: false,
        handle: "ReactJS",
        time: "2h",
        "avatar-image": "/images/react-blue.png",
        "logo-image": "/images/react-blue.png",
        stats: {
            comments: 123,
            retweets: 234,
            likes: 345,
        },
        ...req.body,
    };
    dao.createTweet(newTweet);
    res.json(newTweet);
};

const deleteTweet = (req, res) => {
    dao.deleteTweet(req.params.id);
    res.sendStatus(200);
};

const likeTweet = (req, res) => {
    const id = req.params.id;
    const tweet = dao.findTweetById(id);

    if (tweet._id === id) {
        if (tweet.liked === true) {
            tweet.liked = false;
            tweet.stats.likes--;
        } else {
            tweet.liked = true;
            tweet.stats.likes++;
        }
    }
    dao.updateTweet(id, tweet);
    res.sendStatus(200);
};

module.exports = (app) => {
    app.get("/api/tweets", findAllTweets);
    app.post("/api/tweets", postNewTweet);
    app.delete("/api/tweets/:id", deleteTweet);
    app.put("/api/tweets/:id/like", likeTweet);
};
