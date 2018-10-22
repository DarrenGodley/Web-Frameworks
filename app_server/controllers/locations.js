/* GET 'home' page */
const homelist = function(req, res){
    res.render('locations-list', {
        title: 'Bank of Godley',
        pageHeader: {
            title: 'Bank of Godley',
            strapline: 'Your Faithful And Friendly Financial Partner'
        }
    });
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
