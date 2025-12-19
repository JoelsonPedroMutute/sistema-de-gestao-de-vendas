const Sale = require('../models/Sale');

class SaleService {

    static async create(saleData) {
        return await Sale.create(saleData);
    }

    static async getAll({ page = 1, limit = 10, sort = 'createdAt', order = 'desc', filters = {} }) {
        const query = {};

        // 🔹 Filtro por valor
        const totalAmountFilter = {};
        if (filters.minValue !== undefined && !isNaN(Number(filters.minValue))) {
            totalAmountFilter.$gte = Number(filters.minValue);
        }
        if (filters.maxValue !== undefined && !isNaN(Number(filters.maxValue))) {
            totalAmountFilter.$lte = Number(filters.maxValue);
        }
        if (Object.keys(totalAmountFilter).length > 0) {
            query.totalAmount = totalAmountFilter;
        }

        // 🔹 Filtro por data
        const createdAtFilter = {};
        if (filters.startDate && !isNaN(new Date(filters.startDate))) {
            createdAtFilter.$gte = new Date(filters.startDate);
        }
        if (filters.endDate && !isNaN(new Date(filters.endDate))) {
            createdAtFilter.$lte = new Date(filters.endDate);
        }
        if (Object.keys(createdAtFilter).length > 0) {
            query.createdAt = createdAtFilter;
        }

        // 🔹 Ordenação
        const sortOptions = {};
        sortOptions[sort] = order === 'asc' ? 1 : -1;

        // 🔹 Paginação
        const skip = (page - 1) * limit;

        // 🔹 Consulta
        const data = await Sale.find(query)
            .sort(sortOptions)
            .skip(skip)
            .limit(limit)
            .populate('seller', 'name')
            .populate('customer', 'name');

        const total = await Sale.countDocuments(query);

        return {
            data,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        };
    }

    static async getById(id) {
        return await Sale.findById(id)
            .populate('seller', 'name')
            .populate('customer', 'name');
    }

    static async update(id, saleData) {
        return await Sale.findByIdAndUpdate(id, saleData, { new: true });
    }

    static async delete(id) {
        return await Sale.findByIdAndDelete(id);
    }
}

module.exports = SaleService;
