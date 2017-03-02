const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({  
  brand: {
    type: String,
    required: [true, 'The phone brand is required']
  },
  name: {
    type: String,
    required: [true, 'The phone name is required']
  },
  image: {
    type: String, default: ''
  },
  specs: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('phone', phoneSchema);