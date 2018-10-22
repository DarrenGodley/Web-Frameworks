const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    coords: {type: [Number], index: '2dsphere'},
});

mongoose.model('Location', locationSchema);

const withdrawSchema = new mongoose.Schema({
        withdrawAmount: {
            type: float,
            required: true
        }
    },
);

const depositSchema = new mongoose.Schema({
        depositAmount: {
            type: float,
            required: true
        }
    },
);

const balanceSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            String,
            required: true
        }
    },
);

require('./locations');