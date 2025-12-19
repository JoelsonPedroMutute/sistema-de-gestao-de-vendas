const User = require('../models/user');
const bcrypt = require('bcryptjs');

class UserService {

  static async create(data) {
     const hashedPassword = await bcrypt.hash(data.password, 10);
    return await User.create({ ...data, password: hashedPassword });
  }

  static async getAll() {
    return await User.find().select('-createdAt -updatedAt');
  }

  static async getById(id) {
    return await User.findById(id).select('-createdAt -updatedAt');
  }

  static async update(id, data) {


  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  const user = await User.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true
    }
  ).select('-password');

  return user;
}


  static async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = UserService;
