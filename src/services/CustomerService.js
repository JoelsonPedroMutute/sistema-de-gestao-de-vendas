const Customer = require('../models/Customer');

class CustomerService {

    static async create(customerData) {
        return await Customer.create(customerData);
    }

    static async getAll() {
        return await Customer.find();
    }

    static async getById(id) {
        return await Customer.findById(id);
    }

    static async update(id, customerData) {
        return await Customer.findByIdAndUpdate(
            id,
            customerData,
            { new: true }
        );
    }

    static async delete(id) {
        return await Customer.findByIdAndDelete(id);
    }
}

module.exports = CustomerService;
