const mongoose = require('mongoose');
const Location = mongoose.model('locationSchema');

const locationCreate = function (req, res) { const locationCreate = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
}};

const locationReadOne = function (req, res) { };

const locationUpdateOne = function (req, res) { };

const locationDeleteOne = function (req, res) { };

module.exports = {
    locationCreate,
    locationReadOne,
    locationUpdateOne,
    locationDeleteOne
};
