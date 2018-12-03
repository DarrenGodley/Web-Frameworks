const request = require('request');

const requestOptions = {
    url : 'http://yourapi.com/api/path',
    method : 'GET',
    json : {},
    qs : {
        offset : 20
    }
};
request(requestOptions, (err, response, body) => {
    if (err) {
        console.log(err);
    } else if (response.statusCode === 200) {
        console.log(body);
    } else {
        console.log(response.statusCode);
    }
});

const _renderHomepage = function(req, res, responseBody){
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('locations-list', {
        title: 'Bank of Godley - Your Faithful And Friendly Financial Partner',
        pageHeader: {
            title: 'Bank of Godley',
            strapline: 'Your Faithful And Friendly Financial Partner'
        },
            sidebar: "Looking for a bank? Bank Of Godley helps you find the closest bank where you can deposit and withdraw money and also check their balance.",
        locations: responseBody,
        message: message
    });
};



/* GET 'home' page */
const homelist = function(req, res){
    const path = '/api/locations';
    const requestOptions = {
        //url : apiOptions.server + path,
        method : 'GET',
        json : {},
        qs : {
            lng : -0.9690884,
            lat : 51.455041,
            maxDistance : 20
        }
    };
    request(requestOptions, (err, response, body) => {
            _renderHomepage(req, res, body);
        }
    );
};


/* GET 'Location info' page */
const locationInfo = function(req, res){
    res.render('location-info', { title: 'Location info' });
};

const addReview = function(req, res){
    res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};