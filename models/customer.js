const mongoose = require('mongoose');

const attributeSchema = new mongoose.Schema({
    email: String,
    selfProvisioned: {
      type: String
    },
    remoteLogin: {
        type: String
    },
  
  });

const customerSchema = new mongoose.Schema({
    company: String,
    name: String,
    email: String,
    avatarURL: String,
    attributes: [attributeSchema],
    googleId: String
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Customer', customerSchema);