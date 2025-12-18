const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome é obrigatório'],
    trim: true
  },

  address: {
    type: String,
    required: [true, 'O endereço é obrigatório']
  },

  phone: {
    type: String,
    required: [true, 'O telefone é obrigatório']
  },

  email: {
    type: String,
    required: [true, 'O email é obrigatório'],
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: [true, 'A senha é obrigatória']
  },
  },
  {
    versionKey: false,
  }

);

module.exports = mongoose.model('User', UserSchema);
