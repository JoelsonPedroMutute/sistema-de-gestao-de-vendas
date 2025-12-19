const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    nif: {
      type: String,
      required: true,
      unique: true,
      trim: true
    }
  },
  {
    versionKey: false 
  }
);

module.exports = mongoose.model('Company', CompanySchema);
