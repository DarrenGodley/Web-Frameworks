const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    coords: {type: [Number], index: '2dsphere'},
    opening: String,
    closing: String,
});

mongoose.model(Location, locationSchema);

const withdrawSchema = new mongoose.Schema({
        withdrawAmount: {type: float, required: true}
        },
);

mongoose.model('Withdraw', withdrawSchema);

const depositSchema = new mongoose.Schema({
        depositAmount: {type: float, required: true}
    },
);

mongoose.model('Deposit', depositSchema);

const balanceSchema = new mongoose.Schema({
        balanceAmount: {type: float}
    },
);

mongoose.model('Balance', balanceSchema);

require('./locations');