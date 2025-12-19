const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {

  async register(data) {
    const { name, email, password, address, phone } = data;

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error('Este email já está em uso');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      address,
      phone,
      password: hashedPassword
    });

    return user;
  }

  async login(data) {
  const { email, password } = data;

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new Error('Credenciais inválidas');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Credenciais inválidas');
  }

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  // Retorna token e usuário (sem a senha)
  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone
    }
  };
}


  async logout() {
    // JWT é stateless → logout é lógico
    return true;
  }
}

module.exports = new AuthService();
