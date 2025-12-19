const Seller = require('../models/Seller');

class SellerService {  
    static async create(sellerData) {
        return await Seller.create(sellerData);
    }
    static async getAll() {
        return await Seller.find();
    }
    static async getById(id) {
        return await Seller.findById(id);
    }
    static async update(id, sellerData) {
        return await Seller.findByIdAndUpdate(id, sellerData);
    }
    static async delete(id) {
        return await Seller.findByIdAndDelete(id);
    }
}
module.exports = SellerService;