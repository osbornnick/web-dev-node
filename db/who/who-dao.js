const model = require("./who-model.js");
const findAllWho = () => model.find();

module.exports = {
    findAllWho,
};
