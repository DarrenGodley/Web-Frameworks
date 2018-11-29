const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true
  },
  opening: String,
  closing: String,
  closed: {
    type: Boolean,
    required: true
  }
});

const balanceSchema = new mongoose.Schema({
        balanceAmount: {
          type: double = 0
        }
    });

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  facilities: [String],
  coords: {
    type: [Number],
    index: '2dsphere'
  },
  openingTimes: [openingTimeSchema],
  reviews: [balanceSchema]
});

mongoose.model('Location', locationSchema);