/* GET 'home' page */
const homelist = function(req, res){
    res.render('locations-list', {
        title: 'Bank of Godley - Your Faithful And Friendly Financial Partner',
        pageHeader: {
            title: 'Bank of Godley',
            strapline: 'Your Faithful And Friendly Financial Partner'
        },
        locations: [{
            name: 'Balance',
            description: 'Check the balance of your account',
        },{
            name: 'Withdraw',
            description: 'Withdraw money from your account',
        },{
            name: 'Deposit',
            description: 'Deposit money into your account',
        },{
            name: 'ATM Locations',
            description: 'Search for nearby ATMs',
            }]
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

