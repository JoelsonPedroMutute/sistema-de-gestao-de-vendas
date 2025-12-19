const user = require('../models/user');
const AuthService = require('../services/AuthService');


class AuthController {

  async register(req, res) {
    try {
      const user = await AuthService.register(req.body);

      return res.status(201).json({
        message: 'Usuário registado com sucesso',
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          address: user.address,
          phone: user.phone
        }
      });

    } catch (error) {
      if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({ message: 'Erro de validação', errors });
      }

      return res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { token, user } = await AuthService.login(req.body);
      const decoded = require('jsonwebtoken').decode(token);
      const expiresAt = new Date(decoded.exp * 1000);

      return res.status(200).json({
        message: 'Login realizado com sucesso',
        data: {
          user,
          expiresAt,
          token: `Bearer ${token}`
        }
      });

    } catch (error) {
      return res.status(401).json({
        message: error.message
      });
    }
  }

  async logout(req, res) {
    await AuthService.logout();
    return res.status(200).json({
      message: 'Logout realizado com sucesso'
    });
  }

}

module.exports = new AuthController();
