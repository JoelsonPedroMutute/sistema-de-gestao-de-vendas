const Company = require('../models/Company');

const getAll = async () => {
    return Company.find();
};

const getById = async (id) => {
    return Company.findById(id);
};

const create = async (data) => {
    return Company.create(data);
};

const update = async (id, data) => {
    return Company.findByIdAndUpdate(id, data, { new: true });
};

const deleteCompany = async (id) => {
    return Company.findByIdAndDelete(id);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteCompany
};
