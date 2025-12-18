const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String, 
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,        
        trim: true        
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
}, {
    versionKey: false,
});
module.exports = mongoose.model('Seller', SellerSchema);